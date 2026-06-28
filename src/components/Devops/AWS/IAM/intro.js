/*
|--------------------------------------------------------------------------
| WHAT IS AWS IAM?
|--------------------------------------------------------------------------
|
| IAM means:
|
| Identity and Access Management
|
|
| IAM controls:
|
| ✅ WHO can access AWS
| ✅ WHAT they can access
| ✅ WHAT actions they can perform
|
|
| Think of IAM like:
|
| AWS permissions + security system.
|
*/


/*
|--------------------------------------------------------------------------
| WHY IAM EXISTS
|--------------------------------------------------------------------------
|
| Your AWS account is VERY powerful.
|
|
| It can:
|
| ✅ create servers
| ✅ delete databases
| ✅ manage billing
| ✅ host applications
| ✅ control infrastructure
|
|
| AWS therefore needs:
|
| A secure permission system.
|
*/


/*
|--------------------------------------------------------------------------
| ROOT ACCOUNT VS IAM USER
|--------------------------------------------------------------------------
|
| When you first create AWS:
|
| You get:
|
| Root Account
|
|
| This is:
|
| The master account.
|
|
| Root account has FULL control over:
|
| ✅ billing
| ✅ security
| ✅ all AWS services
| ✅ account deletion
|
|
| VERY IMPORTANT:
|
| NEVER use root account for daily work.
|
*/


/*
|--------------------------------------------------------------------------
| WHY USING ROOT ACCOUNT IS DANGEROUS
|--------------------------------------------------------------------------
|
| If someone steals:
|
| your root credentials
|
|
| they can:
|
| ❌ delete infrastructure
| ❌ create expensive resources
| ❌ access sensitive data
| ❌ destroy entire systems
|
|
| Root account should be:
|
| used rarely
|
*/




// ####################

/*
|--------------------------------------------------------------------------
| IAM USER
|--------------------------------------------------------------------------
|
| IAM Users are:
|
| separate AWS accounts INSIDE your AWS account.
|
|
| Example:
|
| AWS Account
|    ↓
| IAM Users
|
|    - Mubarak
|    - Frontend Dev
|    - Backend Dev
|    - CI/CD Bot
|
|
| Each IAM User can have:
|
| different permissions.
|
*/

// ####################


/*
|--------------------------------------------------------------------------
| REAL COMPANY EXAMPLE
|--------------------------------------------------------------------------
|
| Frontend Developer:
|
| ✅ S3 access
| ✅ CloudFront access
|
| ❌ No billing access
| ❌ No database deletion access
|
|
| Backend Engineer:
|
| ✅ EC2 access
| ✅ RDS access
|
|
| DevOps Engineer:
|
| ✅ Full infrastructure access
|
*/