<template>
<v-container>
       <v-alert type="warning" color="lime" :value="alert">
        PLEAS FILL EAMIL AND PASSWORD
    </v-alert>
      <v-form @submit.prevent="submit">

    <v-text-field
      label="E-mail"
      v-model="email"

      required
    ></v-text-field>

        <v-text-field
      label="Password"
      v-model="password"
        type="password"
      required
    ></v-text-field>
    <v-btn color="green" type="sumit">Submit</v-btn>
  </v-form>
  </v-container>
</template>


<script>
    export default {
        data(){
            return {
                email:null,
                password: null,
                alert:false
            }
        },
        methods: {

             submit(){
               // console.log("data submitted!!");
               if (!this.email&& !this.password ){
                   this.alert= true
               }
            }
        }

           
    }
</script>
