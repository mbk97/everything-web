#!/usr/bin/env bash  
# This is the shebang. It tells Linux to locate Bash through the user’s environment and use it to execute the script.

set -u # This makes Bash report an error if the script tries to use a variable that has not been defined. It helps catch mistakes.

if [[ "$(uname -s)" != "Linux" ]]; then
  printf 'Error: This script must be run on Linux.\n'
  printf 'Current operating system: %s\n' "$(uname -s)"
  exit 1
fi

print_heading (){
    printf '\n=== %s === \n' "$1"
}

# printf prints formatted text.
# \n creates a new line.
# %s is replaced with text.
# $1 is the first value passed to the function.
# Quotes protect values containing spaces.

read_cpu_times(){
     read -r _ user nice system idle iowait irq softirq steal _ < /proc/stat
     CPU_IDLE=$((idle + iowait))
     CPU_TOTAL=$((user + nice + system + idle + iowait + irq + softirq + steal))

     # The values are assigned to:
     
     # _: ignores the word cpu
     # user: time spent running user applications
     # nice: time spent running lower-priority applications
     # system: time spent running the Linux kernel
     # idle: time the CPU was doing nothing
     # iowait: time waiting for disk or network operations
     # irq: time handling hardware interrupts
     # softirq: time handling software interrupts
     # steal: CPU time taken by another virtual machine
     # Final _: ignores any additional value
     # The -r option prevents read from interpreting backslashes.
     # The < /proc/stat part sends the contents of /proc/stat into read.
}


print_heading "SERVER PERFORMANCE STATS"
printf 'Generated: %s\n' "$(date '+%Y-%m-%d %H:%M:%S')"
printf 'Hostname:  %s\n' "$(hostname)"



read_cpu_times

previous_idle=$CPU_IDLE
previous_total=$CPU_TOTAL


sleep 1


read_cpu_times

idle_difference=$((CPU_IDLE - previous_idle))
total_difference=$((CPU_TOTAL - previous_total))


if ((total_difference > 0)); then
    cpu_usage=$(awk -v idle="$idle_difference" -v total=$total_difference \ 'BEGIN {printf "%.2f", (1 - idle / total) * 100}')
else 
   cpu_usage="0.00"
fi

print_heading "TOTAL_CPU_USAGE"
printf 'Used: %s%%\n' "$cpu_usage"


memory_total_kb=$(awk '/^MemTotal:/ { print $2 }' /proc/meminfo)
memory_available_kb=$(awk '/^MemAvailable:/ { print $2 }' /proc/meminfo)
memory_used_kb=$((memory_total_kb - memory_available_kb))
memory_used_percentage=$(awk -v used="$memory_used_kb" -v total="$memory_total_kb" \
  'BEGIN { printf "%.2f", used / total * 100 }')

print_heading "TOTAL MEMORY USAGE"
printf 'Total: %s\n' "$(numfmt --from=iec --to=iec "${memory_total_kb}K")"
printf 'Used:  %s (%s%%)\n' \
  "$(numfmt --from=iec --to=iec "${memory_used_kb}K")" "$memory_used_percentage"
printf 'Free:  %s\n' "$(numfmt --from=iec --to=iec "${memory_available_kb}K")"

print_heading "TOTAL DISK USAGE"
df -h --total -x tmpfs -x devtmpfs | awk '
  /^total/ {
    printf "Total: %s\nUsed:  %s (%s)\nFree:  %s\n", $2, $3, $5, $4
  }
'

print_heading "TOP 5 PROCESSES BY CPU USAGE"
ps -eo pid,comm,%cpu --sort=-%cpu | head -n 6

print_heading "TOP 5 PROCESSES BY MEMORY USAGE"
ps -eo pid,comm,%mem --sort=-%mem | head -n 6