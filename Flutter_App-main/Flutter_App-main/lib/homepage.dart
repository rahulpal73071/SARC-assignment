import 'package:flutter/material.dart';

class MyHome extends StatefulWidget {
  const MyHome({super.key});

  @override
  State<MyHome> createState() => _MyHomeState();
}

class _MyHomeState extends State<MyHome> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(

      appBar: AppBar(
        title: Text('Home'),
        elevation: 24,
        centerTitle: true,
      ),
      body:Center(
        child: Text('Hello I am HOME',style: TextStyle(fontSize: 30),),
      )
    );
  }
}
