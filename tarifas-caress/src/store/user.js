import {ref} from 'vue'
import {defineStore} from 'pinia'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import {auth} from '../firebaseConfig.js'
import { useRouter } from "vue-router";


export const userStore = defineStore('counter',()=>{
    const router = useRouter()
    const userData = ref(null);
    const loadinUser = ref(false);
    const loadingSesion  = ref(false);   
    
    const  registerUser = async (email,password) => {
        try{
            loadinUser.value= true
            const { user} = await createUserWithEmailAndPassword(auth,email,password);
            userData.value = {email : user.email, uid: user.uid}
            router.push('/') 
        }catch(err){
            console.log(err)
        }finally{
            loadinUser.value= false
        }
    };
    const loginUser = async(email,password) =>{
        try{
            loadinUser.value= true
            const {user} = await signInWithEmailAndPassword(auth,email,password)
            userData.value = {email : user.email, uid: user.uid}
            router.push('/')
        }catch(err) {
            console.log(err)
        }finally{
            loadinUser.value = false
        }
    }
    //Cerramos sesion
    const logOutUser = async () =>{
        try {
            await signOut(auth)
            router.push('/login')
            userData.value = null
        } catch (err) {
            console.log(err)
        }
    }
    const currentUser = () =>{
        return new Promise((res,rej) =>{
            const unsuscribe = onAuthStateChanged(auth,(user) =>{
                if(user){
                    userData.value = {email: user.email, uid : user.uid}
                }else{
                    userData.value = null
                }
                res(user)
            }, (e) => rej(e))
            unsuscribe()
        })
    }
    return{
        loadinUser,
        userData,
        loadingSesion ,
        registerUser,
        loginUser,
        logOutUser,
        currentUser
    };
});     