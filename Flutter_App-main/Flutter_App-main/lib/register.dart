import 'package:flutter/material.dart';

class MyRegister extends StatefulWidget {
  const MyRegister({super.key});

  @override
  State<MyRegister> createState() => _MyRegisterState();
}

class _MyRegisterState extends State<MyRegister> {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
          image: DecorationImage(
              image: AssetImage('assets/images/login_page.png'),fit: BoxFit.cover
          )
      ),
      child: Scaffold(
        backgroundColor: Colors.transparent,
        body: Stack(
          children: [
            Padding(
              padding: const EdgeInsets.only(top: 55,left: 20),
              child: InkWell(
                onTap: (){
                  Navigator.pushNamed(context, 'landing');
                },
                child: Row(

                  children: [
                    Icon(Icons.arrow_back),
                    Text('Back',style: TextStyle(fontSize: 25),)
                  ],
                ),

              ),
            ),
            Center(
              child: Container(
                margin: EdgeInsets.only(top: 210),

                height: 550,
                width: 350,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(12),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.white30,
                      offset: Offset(8, 8),
                      spreadRadius:320,
                      blurRadius: 1222,
                      blurStyle: BlurStyle.inner,
                    )
                  ],
                  color: Colors.white,

                ),
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: SingleChildScrollView(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [

                        Center(child: Text('Create Account',style: TextStyle(fontSize: 35),)),
                        Padding(
                          padding: const EdgeInsets.only(top: 20,left: 20),
                          child: Text('Full name',style: TextStyle(fontSize: 15,color:Colors.black54 ),),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(left: 10,right: 10),
                          child: TextField(
                            decoration: InputDecoration(
                              hintText: 'enter your full name',
                              suffixIcon: Icon(Icons.account_box_sharp),
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(1212),

                              ),

                            ),
                          ),
                        ),

                        Padding(
                          padding: const EdgeInsets.only(top: 5,left: 20),
                          child: Text('Email',style: TextStyle(fontSize: 15,color:Colors.black54 ),),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(left: 10,right: 10),
                          child: TextField(
                            decoration: InputDecoration(
                              hintText: 'enter your email',
                              suffixIcon: Icon(Icons.email),
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(1212),

                              ),

                            ),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(top: 10,left: 20),
                          child: Text('Password',style: TextStyle(fontSize: 15,color:Colors.black54 ),),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(left: 10,right: 10),
                          child: TextField(
                            obscureText: true,
                            decoration: InputDecoration(
                              hintText: 'enter your Password',
                              suffixIcon: Icon(Icons.password_sharp),

                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(1212),

                              ),

                            ),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(top: 10,left: 20),
                          child: Text('Confirm Password',style: TextStyle(fontSize: 15,color:Colors.black54 ),),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(left: 10,right: 10),
                          child: TextField(
                            obscureText: true,
                            decoration: InputDecoration(
                              hintText: 'enter again your Password',
                              suffixIcon: Icon(Icons.password_sharp),

                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(1212),

                              ),

                            ),
                          ),
                        ),


                        Padding(
                          padding: const EdgeInsets.all(15.0),
                          child: Center(
                            child: ElevatedButton(onPressed: (){
                              Navigator.pushNamed(context, 'login');
                            }, child: Padding(
                              padding: const EdgeInsets.all(10.0),
                              child: Text('Register',style: TextStyle(fontSize: 20),),
                            ),
                              style: ElevatedButton.styleFrom(
                                elevation:10,
                                backgroundColor: (Colors.orange),
                                foregroundColor: Colors.black,
                                shadowColor: Colors.white,
                                animationDuration: Duration(milliseconds: 500),

                              ),),
                          ),
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: [
                            Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Text('Sign Up with' , style: TextStyle(fontSize: 20),),
                            ),
                            InkWell(
                                onTap: (){},
                                child: CircleAvatar(backgroundImage: AssetImage('assets/images/google_logo.webp'),)),
                            InkWell(
                                onTap: (){},
                                child: CircleAvatar(backgroundImage: AssetImage('assets/images/facebook_logo.webp'),)),
                            InkWell(
                                onTap: (){},
                                child: CircleAvatar(backgroundImage: AssetImage('assets/images/apple_logo.webp'),)),
                          ],
                        ),



                      ],
                    ),
                  ),
                ),
              ),
            ),


          ],
        ),
      ),
    );
  }
}
