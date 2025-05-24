import 'package:flutter/material.dart';
import 'package:flutter_projects/homepage.dart';
import 'package:flutter_projects/login.dart';
import 'package:flutter_projects/landing.dart';
import 'package:flutter_projects/register.dart';

void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    initialRoute: 'landing',
    routes: {
      'landing' : (context)=>MyLanding(),
      'login' : (context)=>MyLogin(),
      'register' :(context)=>MyRegister(),
      'home':(context)=>MyHome(),
    },
  ));
}

