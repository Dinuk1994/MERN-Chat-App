export const signup = async (req,res)=>{
  try {
    const{fullName,userName,password,confirmPassword,gender} = req.body;
    
  } catch (err) {
    
  }  
}

export const login = (req,res)=>{
    console.log("Login");
}

export const logout = (req,res)=>{
    console.log("Logout");
}

