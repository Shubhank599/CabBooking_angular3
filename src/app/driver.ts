export class Driver
{
        username:string;
        email:String;
        password:String;
        mobileNumber:String;
        licenseNo:String;

        constructor(username:string,email:String,password:String,mobileNumber:String,licenseNo:String)
        {
            this.username=username;
            this.email=email;
            this.password= password;
            this.mobileNumber = mobileNumber;
            this.licenseNo= licenseNo;
        }
}