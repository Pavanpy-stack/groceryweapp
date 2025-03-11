const express=require('express')
const router=express.Router()

//user modules import
const usercreation=require('../Controllers/UserControler/Usercreation')

const userlogin=require('../Controllers/UserControler/Userlogin')
const mastergrocerycreation=require('../Controllers/Mastergocery/Mastergrocerycreation')
const mastergrocerygetting=require('../Controllers/Mastergocery/Mastergrocerygetting')

const mastergrocerydeletion=require('../Controllers/Mastergocery/Mastergrocerydeletion')

const editmastergroceryshop=require('../Controllers/Mastergocery/Mastergroceryedit')



const userupdate=require('../Controllers/UserControler/Usereditprofile')


//User Routes
router.post('/usercreation',usercreation);
router.post('/userlogin',userlogin);

router.post('/userupdate',userupdate)





//master routes
router.post('/mastergrocerydeletion',mastergrocerydeletion); 
router.post('/editmastergroceryshop',editmastergroceryshop);
router.post('/mastergrocerycreation',mastergrocerycreation);
router.get('/mastergrocerygetting',mastergrocerygetting);


module.exports=router