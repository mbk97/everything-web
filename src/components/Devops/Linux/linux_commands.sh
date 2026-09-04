# =============================================================================
# 🐧 BASH SCRIPTING SYNTAX — PRACTICAL COMPLETE GUIDE
# =============================================================================

# -----------------------------------------------------------------------------
# ! IMPORTANT: BASH COMMENTS
# -----------------------------------------------------------------------------
#
# Bash uses # for comments.
#
# JavaScript comments are NOT valid Bash:
#
# // This will cause an error
# /* This will also cause an error */
#
# Correct Bash comment:
# This is a Bash comment
#
# Everything in this guide uses valid Bash comments.
#

# -----------------------------------------------------------------------------
# ! 1. THE SHEBANG
# -----------------------------------------------------------------------------
#
# The shebang must be the FIRST line of the script.
#
# It tells Linux which program should execute the file.
#
#!/usr/bin/env bash
#
# Meaning:
#
# #!             → Shebang marker
# /usr/bin/env   → Locates a program in the user's environment
# bash           → The program that executes the script
#
# Another valid option:
#
# #!/bin/bash
#
# The env version is usually more portable:
#
# #!/usr/bin/env bash
#

# -----------------------------------------------------------------------------
# ! 2. STRICT MODE
# -----------------------------------------------------------------------------
#
# Strict mode helps Bash detect errors early.
#
set -u
#
# set -u:
# Stop when an undefined variable is used.
#
# Other useful options:
#
# set -e
# Stop when a command fails.
#
# set -o pipefail
# Make a pipeline fail if any command in it fails.
#
# Common combination:
#
# set -euo pipefail
#
# Be careful:
# set -e can sometimes stop a script in situations where you expected it
# to continue. Understand it before relying on it in complex scripts.
#

# -----------------------------------------------------------------------------
# ! 3. PRINTING OUTPUT
# -----------------------------------------------------------------------------
#
# echo prints simple text.
#
echo "Hello, Linux"
#
# printf gives you better formatting control.
#
printf 'Hello, Linux\n'
#
# \n means:
# Start a new line.
#
# Common printf placeholders:
#
# %s → string
# %d → integer
# %f → decimal number
#
name="Mubarak"
age=25
score=92.5

printf 'Name: %s\n' "$name"
printf 'Age: %d\n' "$age"
printf 'Score: %.1f\n' "$score"
#
# %.1f means:
# Print a decimal number with one digit after the decimal point.
#

# -----------------------------------------------------------------------------
# ! 4. VARIABLES
# -----------------------------------------------------------------------------
#
# Do not put spaces around = when creating a variable.
#
first_name="Mubarak"
age=25
#
# Wrong:
#
# first_name = "Mubarak"
#
# Read a variable using $:
#
echo "$first_name"
echo "$age"
#
# Preferred syntax:
#
echo "${first_name}"
#
# Curly braces clearly show where the variable name ends.
#
file_name="server"
echo "${file_name}.log"
#
# Always quote normal variable expansions:
#
echo "$first_name"
#
# Quoting prevents unwanted word splitting and filename expansion.
#

# -----------------------------------------------------------------------------
# ! 5. CONSTANT-LIKE VARIABLES
# -----------------------------------------------------------------------------
#
# Bash does not have JavaScript-style const.
# Use readonly:
#
readonly APP_NAME="Server Monitor"
readonly VERSION="1.0.0"
#
# APP_NAME cannot be changed after this.
#

# -----------------------------------------------------------------------------
# ! 6. ENVIRONMENT VARIABLES
# -----------------------------------------------------------------------------
#
# export makes a variable available to child processes.
#
export NODE_ENV="production"
export PORT="3000"
#
# Read an environment variable:
#
echo "$NODE_ENV"
#
# Give it a default value:
#
database_url="${DATABASE_URL:-postgresql://localhost:5432/app}"
#
# Meaning:
# Use DATABASE_URL if it exists.
# Otherwise, use the value after :-.
#
# Require a variable:
#
# api_key="${API_KEY:?API_KEY must be provided}"
#
# If API_KEY is missing, the script stops with the given message.
#

# -----------------------------------------------------------------------------
# ! 7. COMMAND-LINE ARGUMENTS
# -----------------------------------------------------------------------------
#
# If the script is executed like this:
#
# ./deploy.sh production version-2
#
# Bash provides:
#
# $0 → script name
# $1 → first argument
# $2 → second argument
# $# → number of arguments
# "$@" → all arguments, safely separated
# "$*" → all arguments as one combined value
#
script_name="$0"
first_argument="${1:-}"
second_argument="${2:-}"

echo "Script: $script_name"
echo "First argument: $first_argument"
echo "Second argument: $second_argument"
echo "Number of arguments: $#"
#
# Loop over all arguments:
#
for argument in "$@"; do
    echo "Argument: $argument"
done
#
# Use "$@" instead of $@.
# The quoted version preserves arguments containing spaces.
#

# -----------------------------------------------------------------------------
# ! 8. READING USER INPUT
# -----------------------------------------------------------------------------
#
# Read normal input:
#
read -r user_name
echo "Hello, $user_name"
#
# Show a prompt:
#
read -r -p "Enter your name: " user_name
echo "Hello, $user_name"
#
# Read secret input without displaying it:
#
read -r -s -p "Enter password: " password
printf '\n'
#
# -r:
# Prevents backslashes from being treated as escape characters.
#
# -p:
# Displays a prompt.
#
# -s:
# Hides the user's input.
#

# -----------------------------------------------------------------------------
# ! 9. COMMAND SUBSTITUTION
# -----------------------------------------------------------------------------
#
# Command substitution stores command output in a variable.
#
current_date="$(date)"
current_user="$(whoami)"
current_directory="$(pwd)"
#
# Display the results:
#
echo "$current_date"
echo "$current_user"
echo "$current_directory"
#
# Preferred syntax:
#
# result="$(command)"
#
# Older syntax exists:
#
# result=`command`
#
# Prefer $() because it is easier to read and nest.
#

# -----------------------------------------------------------------------------
# ! 10. ARITHMETIC
# -----------------------------------------------------------------------------
#
number_one=10
number_two=5

sum=$((number_one + number_two))
difference=$((number_one - number_two))
product=$((number_one * number_two))
division=$((number_one / number_two))
remainder=$((number_one % number_two))
#
# Display results:
#
echo "$sum"
echo "$difference"
echo "$product"
echo "$division"
echo "$remainder"
#
# Increment:
#
((number_one++))
#
# Decrement:
#
((number_two--))
#
# Add and assign:
#
((number_one += 5))
#
# Bash integer arithmetic does not handle decimal numbers directly.
# For decimals, use awk or bc.
#
decimal_result="$(awk 'BEGIN { print 10.5 / 2 }')"
echo "$decimal_result"
#

# -----------------------------------------------------------------------------
# ! 11. TEST CONDITIONS
# -----------------------------------------------------------------------------
#
# Modern Bash condition syntax:
#
# [[ condition ]]
#
# String comparison:
#
name="Mubarak"

[[ "$name" == "Mubarak" ]]
[[ "$name" != "Adeola" ]]
[[ -z "$name" ]]
[[ -n "$name" ]]
#
# Meaning:
#
# == → equal
# != → not equal
# -z → string is empty
# -n → string is not empty
#
# Numeric comparison:
#
age=25

[[ "$age" -eq 25 ]]
[[ "$age" -ne 20 ]]
[[ "$age" -gt 18 ]]
[[ "$age" -ge 18 ]]
[[ "$age" -lt 30 ]]
[[ "$age" -le 25 ]]
#
# Meaning:
#
# -eq → equal
# -ne → not equal
# -gt → greater than
# -ge → greater than or equal
# -lt → less than
# -le → less than or equal
#

# -----------------------------------------------------------------------------
# ! 12. FILE AND DIRECTORY TESTS
# -----------------------------------------------------------------------------
#
path="/etc/passwd"
#
# Common tests:
#
# -e → path exists
# -f → regular file exists
# -d → directory exists
# -r → path is readable
# -w → path is writable
# -x → path is executable
# -s → file exists and is not empty
# -L → symbolic link exists
#
if [[ -f "$path" ]]; then
    echo "$path is a file"
fi

if [[ -d "/etc" ]]; then
    echo "/etc is a directory"
fi
#

# -----------------------------------------------------------------------------
# ! 13. IF, ELIF, AND ELSE
# -----------------------------------------------------------------------------
#
cpu_usage=75

if [[ "$cpu_usage" -ge 90 ]]; then
    echo "Critical CPU usage"
elif [[ "$cpu_usage" -ge 70 ]]; then
    echo "High CPU usage"
else
    echo "CPU usage is normal"
fi
#
# Structure:
#
# if [[ condition ]]; then
#     commands
# elif [[ another condition ]]; then
#     commands
# else
#     commands
# fi
#
# fi closes the if statement.
#

# -----------------------------------------------------------------------------
# ! 14. COMBINING CONDITIONS
# -----------------------------------------------------------------------------
#
username="admin"
account_active="true"

if [[ "$username" == "admin" && "$account_active" == "true" ]]; then
    echo "Access granted"
fi
#
# && → AND
# || → OR
# !  → NOT
#
if [[ "$username" == "admin" || "$username" == "root" ]]; then
    echo "Privileged user"
fi

if [[ ! -f "config.env" ]]; then
    echo "Configuration file is missing"
fi
#

# -----------------------------------------------------------------------------
# ! 15. COMMAND SUCCESS AND FAILURE
# -----------------------------------------------------------------------------
#
# Every command returns an exit status.
#
# 0     → success
# 1–255 → failure or another result
#
# $? contains the exit status of the most recent command.
#
ls /etc
status="$?"

echo "Exit status: $status"
#
# Preferred approach:
#
if command -v nginx >/dev/null 2>&1; then
    echo "Nginx is installed"
else
    echo "Nginx is not installed"
fi
#
# Run another command only when the first succeeds:
#
mkdir -p "logs" && echo "Logs directory is ready"
#
# Run another command only when the first fails:
#
# curl https://example.com || echo "Request failed"
#

# -----------------------------------------------------------------------------
# ! 16. CASE STATEMENTS i stopped here
# -----------------------------------------------------------------------------
#
environment="${1:-development}"

case "$environment" in
    development)
        echo "Starting development environment"
        ;;
    staging)
        echo "Starting staging environment"
        ;;
    production)
        echo "Starting production environment"
        ;;
    *)
        echo "Unknown environment: $environment"
        ;;
esac
#
# ;;
# Ends each case option.
#
# *)
# Matches any value not previously matched.
#
# esac
# Closes the case statement.
#

# -----------------------------------------------------------------------------
# ! 17. FOR LOOPS
# -----------------------------------------------------------------------------
#
# Loop through a list:
#
for server in "api-server" "database-server" "cache-server"; do
    echo "Checking $server"
done
#
# Loop through numbers:
#
for number in {1..5}; do
    echo "Number: $number"
done
#
# C-style loop:
#
for ((index = 0; index < 5; index++)); do
    echo "Index: $index"
done
#
# Loop through files:
#
for file in ./*.log; do
    [[ -e "$file" ]] || continue
    echo "Log file: $file"
done
#
# The existence check prevents problems when no .log file matches.
#

# -----------------------------------------------------------------------------
# ! 18. WHILE LOOPS
# -----------------------------------------------------------------------------
#
counter=1

while [[ "$counter" -le 5 ]]; do
    echo "Counter: $counter"
    ((counter++))
done
#
# Read a file line by line:
#
# while IFS= read -r line; do
#     echo "$line"
# done < "app.log"
#
# IFS=
# Preserves leading and trailing whitespace.
#
# read -r
# Preserves backslashes.
#

# -----------------------------------------------------------------------------
# ! 19. UNTIL LOOPS
# -----------------------------------------------------------------------------
#
attempt=1

until [[ "$attempt" -gt 3 ]]; do
    echo "Attempt: $attempt"
    ((attempt++))
done
#
# until continues while the condition is false.
#

# -----------------------------------------------------------------------------
# ! 20. BREAK AND CONTINUE
# -----------------------------------------------------------------------------
#
for number in {1..10}; do
    if [[ "$number" -eq 3 ]]; then
        continue
    fi

    if [[ "$number" -eq 8 ]]; then
        break
    fi

    echo "$number"
done
#
# continue:
# Skip the current loop iteration.
#
# break:
# Exit the loop completely.
#

# -----------------------------------------------------------------------------
# ! 21. FUNCTIONS
# -----------------------------------------------------------------------------
#
print_heading() {
    printf '\n=== %s ===\n' "$1"
}

print_heading "CPU Usage"
#
# Function structure:
#
# function_name() {
#     commands
# }
#
# Call the function using its name:
#
# function_name
#
# Pass arguments after its name:
#
# function_name "argument one" "argument two"
#
# Inside the function:
#
# $1 → first function argument
# $2 → second function argument
# "$@" → all function arguments
#

# -----------------------------------------------------------------------------
# ! 22. LOCAL FUNCTION VARIABLES
# -----------------------------------------------------------------------------
#
greet_user() {
    local user_name="${1:-Guest}"
    printf 'Hello, %s\n' "$user_name"
}

greet_user "Mubarak"
#
# local prevents the variable from changing variables outside the function.
#

# -----------------------------------------------------------------------------
# ! 23. FUNCTION RETURN VALUES
# -----------------------------------------------------------------------------
#
# Bash functions return an exit status, not normal data.
#
is_root_user() {
    if [[ "${EUID}" -eq 0 ]]; then
        return 0
    fi

    return 1
}

if is_root_user; then
    echo "Running as root"
else
    echo "Not running as root"
fi
#
# To return text, print it:
#
get_current_user() {
    whoami
}

logged_in_user="$(get_current_user)"
echo "$logged_in_user"
#

# -----------------------------------------------------------------------------
# ! 24. ARRAYS
# -----------------------------------------------------------------------------
#
servers=("api" "database" "redis")
#
# Read the first item:
#
echo "${servers[0]}"
#
# Read all items:
#
echo "${servers[@]}"
#
# Number of items:
#
echo "${#servers[@]}"
#
# Add an item:
#
servers+=("nginx")
#
# Loop through the array:
#
for server in "${servers[@]}"; do
    echo "$server"
done
#
# Read indexes:
#
for index in "${!servers[@]}"; do
    printf 'Index %s: %s\n' "$index" "${servers[$index]}"
done
#

# -----------------------------------------------------------------------------
# ! 25. ASSOCIATIVE ARRAYS
# -----------------------------------------------------------------------------
#
# Associative arrays use named keys.
#
declare -A server_ports=(
    [nginx]="80"
    [node]="3000"
    [redis]="6379"
)

echo "${server_ports[nginx]}"
echo "${server_ports[redis]}"
#
# Loop through keys:
#
for service in "${!server_ports[@]}"; do
    printf '%s uses port %s\n' "$service" "${server_ports[$service]}"
done
#

# -----------------------------------------------------------------------------
# ! 26. STRING OPERATIONS
# -----------------------------------------------------------------------------
#
message="Linux scripting"
#
# String length:
#
echo "${#message}"
#
# Substring:
#
echo "${message:0:5}"
#
# Replace text:
#
echo "${message/Linux/Bash}"
#
# Remove prefix:
#
file_path="/var/log/nginx/access.log"
echo "${file_path##*/}"
#
# Result:
# access.log
#
# Remove extension:
#
file_name="server.log"
echo "${file_name%.*}"
#
# Result:
# server
#

# -----------------------------------------------------------------------------
# ! 27. DEFAULT AND REQUIRED VALUES
# -----------------------------------------------------------------------------
#
# Default value:
#
port="${PORT:-3000}"
#
# Assign a default value:
#
database_host="${DATABASE_HOST:=localhost}"
#
# Use another value when variable exists:
#
mode="${NODE_ENV:+configured}"
#
# Stop if the variable is missing:
#
# secret="${SECRET_KEY:?SECRET_KEY is required}"
#
# Difference:
#
# ${VARIABLE:-default} → use default without changing VARIABLE
# ${VARIABLE:=default} → use default and assign it to VARIABLE
# ${VARIABLE:?message} → stop and show message if missing
# ${VARIABLE:+value}   → use value when VARIABLE is defined
#

# -----------------------------------------------------------------------------
# ! 28. GLOBS AND WILDCARDS
# -----------------------------------------------------------------------------
#
# *  → matches any number of characters
# ?  → matches exactly one character
# [] → matches characters in a set or range
#
# Examples:
#
# *.log       → every file ending in .log
# file?.txt   → file1.txt, fileA.txt
# file[1-5]   → file1 through file5
#
# Always be careful with wildcards in destructive commands.
#
# Inspect matches before removing anything:
#
# printf '%s\n' ./*.log
#

# -----------------------------------------------------------------------------
# ! 29. QUOTING RULES
# -----------------------------------------------------------------------------
#
name="Mubarak"
#
# Double quotes expand variables:
#
echo "Hello, $name"
#
# Single quotes do not expand variables:
#
echo 'Hello, $name'
#
# Result:
# Hello, $name
#
# Backslash escapes the next special character:
#
echo "The price is \$100"
#
# Best habit:
# Put double quotes around variable expansions.
#
echo "$name"
#

# -----------------------------------------------------------------------------
# ! 30. REDIRECTION
# -----------------------------------------------------------------------------
#
# Standard output:
# stdout
#
# Standard error:
# stderr
#
# Standard input:
# stdin
#
# Overwrite a file:
#
echo "Application started" > "app.log"
#
# Append to a file:
#
echo "Application stopped" >> "app.log"
#
# Redirect errors:
#
# command 2> "error.log"
#
# Append errors:
#
# command 2>> "error.log"
#
# Redirect output and errors:
#
# command > "app.log" 2>&1
#
# Modern Bash version:
#
# command &> "app.log"
#
# Discard output:
#
# command >/dev/null 2>&1
#

# -----------------------------------------------------------------------------
# ! 31. PIPES
# -----------------------------------------------------------------------------
#
# A pipe sends the output of one command into another command.
#
# ps aux | grep "nginx"
# df -h | tail -n 1
# free -m | awk '/Mem:/ {print $3}'
#
# With pipefail enabled:
#
# set -o pipefail
#
# The pipeline fails when any command inside it fails.
#

# -----------------------------------------------------------------------------
# ! 32. HERE DOCUMENTS
# -----------------------------------------------------------------------------
#
# A here document provides multiple lines of input.
#
cat <<EOF
Application: $APP_NAME
Version: $VERSION
Environment: $NODE_ENV
EOF
#
# Variables are expanded above.
#
# Prevent variable expansion by quoting EOF:
#
cat <<'EOF'
This prints $APP_NAME literally.
Variables are not expanded.
EOF
#

# -----------------------------------------------------------------------------
# ! 33. HERE STRINGS
# -----------------------------------------------------------------------------
#
# A here string sends one string into a command.
#
word_count="$(wc -w <<< "Linux scripting is powerful")"
echo "$word_count"
#

# -----------------------------------------------------------------------------
# ! 34. EXITING A SCRIPT
# -----------------------------------------------------------------------------
#
# Exit successfully:
#
# exit 0
#
# Exit with failure:
#
# exit 1
#
# Example:
#
configuration_file="/etc/example.conf"

if [[ ! -f "$configuration_file" ]]; then
    echo "Configuration file not found: $configuration_file" >&2
    # exit 1
fi
#
# >&2 sends the message to standard error.
#

# -----------------------------------------------------------------------------
# ! 35. ERROR HANDLING
# -----------------------------------------------------------------------------
#
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

if command_exists "curl"; then
    echo "curl is available"
else
    echo "curl is required" >&2
fi
#
# Explicit failure handling:
#
# if ! cp "source.txt" "backup.txt"; then
#     echo "Backup failed" >&2
#     exit 1
# fi
#
# The ! means:
# Run the if block when the command fails.
#

# -----------------------------------------------------------------------------
# ! 36. TRAPS AND CLEANUP
# -----------------------------------------------------------------------------
#
# trap runs a command when the script receives a signal or exits.
#
cleanup() {
    echo "Cleaning up temporary resources"
}

trap cleanup EXIT
#
# Common signals:
#
# EXIT → script exits
# INT  → Ctrl+C
# TERM → termination request
# ERR  → a command fails in certain contexts
#
# Multiple signals:
#
# trap cleanup EXIT INT TERM
#

# -----------------------------------------------------------------------------
# ! 37. TEMPORARY FILES
# -----------------------------------------------------------------------------
#
# Avoid predictable temporary names.
# Use mktemp:
#
temporary_file="$(mktemp)"
temporary_directory="$(mktemp -d)"
#
# Clean them safely:
#
cleanup_temporary_files() {
    rm -f -- "$temporary_file"
    rm -rf -- "$temporary_directory"
}
#
# In a real script:
#
# trap cleanup_temporary_files EXIT
#
# The -- tells rm:
# Stop reading options after this point.
#
# This protects against filenames beginning with -.
#

# -----------------------------------------------------------------------------
# ! 38. CHECKING REQUIRED ARGUMENTS
# -----------------------------------------------------------------------------
#
# Example:
#
# if [[ "$#" -lt 1 ]]; then
#     echo "Usage: $0 <environment>" >&2
#     exit 1
# fi
#
# environment="$1"
#
# "$#" contains the number of arguments passed to the script.
#

# -----------------------------------------------------------------------------
# ! 39. GETOPTS FOR COMMAND OPTIONS
# -----------------------------------------------------------------------------
#
# Example command:
#
# ./deploy.sh -e production -v
#
# Example parser:
#
# environment=""
# verbose=false
#
# while getopts ":e:v" option; do
#     case "$option" in
#         e)
#             environment="$OPTARG"
#             ;;
#         v)
#             verbose=true
#             ;;
#         :)
#             echo "Option -$OPTARG requires a value" >&2
#             exit 1
#             ;;
#         \?)
#             echo "Unknown option: -$OPTARG" >&2
#             exit 1
#             ;;
#     esac
# done
#
# shift $((OPTIND - 1))
#
# getopts handles short options such as:
#
# -e production
# -v
#

# -----------------------------------------------------------------------------
# ! 40. DEBUGGING A SCRIPT
# -----------------------------------------------------------------------------
#
# Check syntax without running the script:
#
# bash -n script.sh
#
# Run and display commands as they execute:
#
# bash -x script.sh
#
# Enable debugging inside the script:
#
# set -x
#
# commands being debugged
#
# set +x
#
# Never enable set -x around passwords, API keys, or other secrets.
#

# -----------------------------------------------------------------------------
# ! 41. SHELLCHECK
# -----------------------------------------------------------------------------
#
# ShellCheck detects common Bash mistakes.
#
# Run:
#
# shellcheck script.sh
#
# It can detect:
#
# - Unquoted variables
# - Incorrect condition syntax
# - Unused variables
# - Dangerous word splitting
# - Portability problems
#

# -----------------------------------------------------------------------------
# ! 42. MAKING A SCRIPT EXECUTABLE
# -----------------------------------------------------------------------------
#
# Create the script:
#
# touch server-stats.sh
#
# Add execute permission:
#
# chmod +x server-stats.sh
#
# Execute it:
#
# ./server-stats.sh
#
# You can also run it without changing permissions:
#
# bash server-stats.sh
#

# -----------------------------------------------------------------------------
# ! 43. A SAFE SCRIPT STRUCTURE
# -----------------------------------------------------------------------------
#
# A clean Bash script commonly follows this structure:
#
# 1. Shebang
# 2. Strict mode
# 3. Constants
# 4. Functions
# 5. main function
# 6. main "$@"
#
# Example:
#
# #!/usr/bin/env bash
#
# set -euo pipefail
#
# readonly APP_NAME="Server Monitor"
#
# print_heading() {
#     printf '\n=== %s ===\n' "$1"
# }
#
# main() {
#     print_heading "$APP_NAME"
#     echo "Collecting server statistics..."
# }
#
# main "$@"
#

# -----------------------------------------------------------------------------
# ! 44. WHY USE A MAIN FUNCTION?
# -----------------------------------------------------------------------------
#
# main gives the script a clear starting point.
#
# Benefits:
#
# - Easier to read
# - Easier to test
# - Variables can be local
# - Functions are defined before execution
# - Command-line arguments are passed clearly
#
# The final line:
#
# main "$@"
#
# means:
# Call main and pass every script argument into it.
#

# -----------------------------------------------------------------------------
# ! 45. SERVER STATISTICS COMMANDS
# -----------------------------------------------------------------------------
#
# CPU information:
#
# top
# uptime
# mpstat
# ps aux
#
# Memory information:
#
# free -h
# free -m
#
# Disk information:
#
# df -h
# du -sh directory
#
# Top processes by CPU:
#
# ps -eo pid,comm,%cpu --sort=-%cpu | head -n 6
#
# Top processes by memory:
#
# ps -eo pid,comm,%mem --sort=-%mem | head -n 6
#
# Why head -n 6?
#
# ps prints one heading row.
# Therefore:
#
# 1 heading + 5 processes = 6 lines.
#

# -----------------------------------------------------------------------------
# ! 46. PRINT_HEADING FUNCTION EXPLAINED
# -----------------------------------------------------------------------------
#
print_heading() {
    printf '\n=== %s ===\n' "$1"
}
#
# Line-by-line:
#
# print_heading()
# Defines a function named print_heading.
#
# {
# Opens the function body.
#
# printf
# Prints formatted text.
#
# '\n=== %s ===\n'
# \n starts a new line.
# === adds visual decoration.
# %s is replaced with a string.
# The final \n ends the line.
#
# "$1"
# The first value passed into the function.
#
# }
# Closes the function.
#
# Call it:
#
print_heading "Hello"
#
# Output:
#
# === Hello ===
#

# -----------------------------------------------------------------------------
# ! 47. COMMON BASH MISTAKES
# -----------------------------------------------------------------------------
#
# WRONG: Spaces around variable assignment
#
# name = "Mubarak"
#
# CORRECT:
#
name="Mubarak"
#
# WRONG: Invalid printf placeholder
#
# printf '%$' "$name"
#
# CORRECT:
#
printf '%s\n' "$name"
#
# WRONG: JavaScript function syntax
#
# function greet(name) {}
#
# CORRECT:
#
greet() {
    local name="${1:-Guest}"
    echo "Hello, $name"
}
#
# WRONG: Unquoted variable
#
# rm $file
#
# BETTER:
#
# rm -- "$file"
#
# WRONG: Comparing numbers using >
#
# [[ "$age" > 18 ]]
#
# CORRECT:
#
[[ "$age" -gt 18 ]]
#
# WRONG: Missing spaces inside [[ ]]
#
# [["$age" -gt 18]]
#
# CORRECT:
#
[[ "$age" -gt 18 ]]
#

# -----------------------------------------------------------------------------
# ! 48. COMPLETE STARTER TEMPLATE
# -----------------------------------------------------------------------------
#
# Copy this structure when starting a new Bash script:
#
# #!/usr/bin/env bash
#
# set -euo pipefail
#
# readonly SCRIPT_NAME="$(basename "$0")"
#
# print_heading() {
#     local heading="${1:-}"
#     printf '\n=== %s ===\n' "$heading"
# }
#
# show_usage() {
#     printf 'Usage: %s <argument>\n' "$SCRIPT_NAME"
# }
#
# main() {
#     if [[ "$#" -lt 1 ]]; then
#         show_usage
#         return 1
#     fi
#
#     local argument="$1"
#
#     print_heading "Starting"
#     printf 'Argument: %s\n' "$argument"
# }
#
# main "$@"
#

# -----------------------------------------------------------------------------
# ! 49. PRACTICE TASK
# -----------------------------------------------------------------------------
#
# Build a script named server-stats.sh that displays:
#
# 1. Total CPU usage
# 2. Used and free memory
# 3. Memory usage percentage
# 4. Used and free disk space
# 5. Disk usage percentage
# 6. Top five processes by CPU usage
# 7. Top five processes by memory usage
#
# Recommended structure:
#
# #!/usr/bin/env bash
#
# set -u
#
# print_heading() {
#     printf '\n=== %s ===\n' "$1"
# }
#
# show_cpu_usage() {
#     print_heading "Total CPU Usage"
# }
#
# show_memory_usage() {
#     print_heading "Memory Usage"
# }
#
# show_disk_usage() {
#     print_heading "Disk Usage"
# }
#
# show_top_cpu_processes() {
#     print_heading "Top 5 Processes by CPU"
# }
#
# show_top_memory_processes() {
#     print_heading "Top 5 Processes by Memory"
# }
#
# main() {
#     show_cpu_usage
#     show_memory_usage
#     show_disk_usage
#     show_top_cpu_processes
#     show_top_memory_processes
# }
#
# main "$@"
#

# -----------------------------------------------------------------------------
# ! SENIOR-LEVEL SUMMARY
# -----------------------------------------------------------------------------
#
# The most important Bash concepts are:
#
# - Shebang
# - Variables and quoting
# - Command substitution
# - Conditions
# - Loops
# - Functions
# - Arrays
# - Arguments
# - Exit statuses
# - Redirection and pipes
# - Error handling
# - Cleanup traps
# - Safe file handling
#
# The key mindset is:
#
# Bash is mainly used to coordinate operating-system commands.
#
# It is excellent for:
#
# - Server monitoring
# - Deployment scripts
# - File automation
# - Log processing
# - Backups
# - Service management
# - Development workflows
#
# It is usually not the best language for:
#
# - Large business applications
# - Complex data structures
# - Heavy mathematical processing
# - Large maintainable software systems
#
# For those, use languages such as:
#
# - TypeScript
# - Python
# - Go
#
# Then use Bash to connect the tools together.
#