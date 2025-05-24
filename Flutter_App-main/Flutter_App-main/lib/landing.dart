import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class MyLanding extends StatefulWidget {
  const MyLanding({super.key});

  @override
  State<MyLanding> createState() => _MyLandingState();
}

class _MyLandingState extends State<MyLanding> {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        image: DecorationImage(
          image: AssetImage('assets/images/landing_page.png'),fit: BoxFit.cover
        )
      ),
      child: Scaffold(
        backgroundColor: Colors.transparent,
        body: Stack(
          children: [
            Container(

              alignment: Alignment.topCenter, // Centers horizontally
              padding: EdgeInsets.only(top: 140), // Keeps vertical positioning
              child: Text(
                'Hello',
                style: TextStyle(
                  fontSize: 50,
                  fontWeight: FontWeight.w900,
                  color: Colors.white,
                ),
              ),
            ),
            Center(
              child: Container(
                height: 800,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    ElevatedButton(onPressed: (){
                      Navigator.pushNamed(context, 'login');
                    }, child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Text('Login',style: TextStyle(fontSize: 25),),
                    ),
                      style: ElevatedButton.styleFrom(
                      elevation:10,
                        backgroundColor: Colors.white,
                        foregroundColor: Colors.black,
                        shadowColor: Colors.white,
                        animationDuration: Duration(milliseconds: 500),

                    ),),
                    ElevatedButton(onPressed: (){
                      Navigator.pushNamed(context, 'register');
                    }, child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Text('Register',style: TextStyle(fontSize: 25),),
                    ),
                      style: ElevatedButton.styleFrom(
                        elevation:10,
                        backgroundColor: Colors.white,
                        foregroundColor: Colors.black,
                        shadowColor: Colors.white,
                        animationDuration: Duration(milliseconds: 500),

                      ),),
                  ],
                ),
              ),
            )

          ],
        ),
      ),
    );
  }
}
