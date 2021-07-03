const User=require('../Model/User');

exports.userSignUp=(req,res,next)=>{
    const Name=req.body.Name;
    const Email=req.body.Email;
    const Password=req.body.Password;
    const ConfirmPassword=req.body.ConfirmPassword;
    User.findOne({Email:Email}).then((savedUser)=>{
        if(savedUser){
            return res.status(200).json({message:"Account already exit, please login",savedUser})
        }else{
            const Createaccount=new User({Name:Name,Email:Email, Password: Password,ConfirmPassword:ConfirmPassword});
            Createaccount.save().then(result=>{
                
                res.status(200).json({message:"Account Created Sucessfully",result })
            }).catch(err=>{
                res.status(500).json({err})
            
            })

        }
    })
}

exports.userLogin=(req,res,next)=>{
    const Email=req.body.Email;
    const Password=req.body.Password;
   
            
        User.findOne({Email:Email})
            .then(result=>{
            if(result){
                User.find({Email:Email,Password:Password})
                .then(result=>{
                if(result.length>=1){
                return res.status(200).json({message:"User Login Sucessfully",isAthunticated:true,user:result})
                }
                else{
                    return res.status(200).json({message:"incorrect PassWord",isAthunticated:false,user:result})
                       
                }
                }).catch(err=>{
                    res.status(500).json({err})
                
                })
           
            }
            else{
                return res.status(200).json({message:"Account is not created",isAthunticated:false,user:result})
            }
            })
    
}