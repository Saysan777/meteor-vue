<template>
   <div class="change-pass">
      <form class="pass-content" @submit.prevent="changePass">
          <h3>Change Password</h3>
          <label for="">Old Password</label>
          <input type="password" v-model="old"  id="" required>
          <label for="">New Password</label>
          <input type="password" v-model="newPass"  id="" required>
 

        <button class="pass-btn" > Save</button>
      </form>
  </div>
</template>

<script>
import { Accounts } from 'meteor/accounts-base'

export default {
        data(){
            return{
                old:"",
                newPass:"",
            }
        },
        methods:{
            changePass(){
                    Accounts.changePassword(this.old, this.newPass);
                     this.$router.push('/user')
        }
        }
}

</script>

<style>
.change-pass{
        display: flex;
        justify-content: center;
        width:100vw;
        height: 90.5vh;
        background: rgba(0, 0, 23,20);
        }
    
    .change-pass .pass-content{
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        color:black;
        width:400px;
        height:400px;
        border:2px solid gray;
        border-radius: 12px;
        padding:10px;
        background: white;
        margin-top:6rem;
    }
     .change-pass .pass-content h3{
         margin:0 17rem 0 0;
         width:max-content;
         font-size: 1.5rem;
     }

    .pass-content input{
         padding: 10px;
          width:240px;
          margin-top:5px;
          border-radius: 12px;
          border:2px solid gainsboro;
          outline:none;
          margin-left:4rem
    }
    .pass-content input:hover{
            border:2px solid lightblue;
    }
     .change-pass .pass-content label{
         margin:1.8rem 0 0 4rem;
     }

    .pass-content .pass-btn{
        padding:12px 10px;
        border-radius: 12px;
        border: none;
         width:250px;
         margin:2.7rem 0 0 4rem;
    }

    .pass-content .pass-btn:hover{
        background: rgb(0, 167, 0);
    }
</style>