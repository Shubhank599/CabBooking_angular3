export class Driver
{
        username:string;
        email:String;
        password:String;
        mobileNumber:String;
        licenseNo:String;
        driverId:string;

        constructor(username:string,email:String,password:String,mobileNumber:String,licenseNo:String,driverId:string)
        {
            this.username=username;
            this.email=email;
            this.password= password;
            this.mobileNumber = mobileNumber;
            this.licenseNo= licenseNo;
            this.driverId=driverId;
        }
}