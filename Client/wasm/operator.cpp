#include<emscripten.h>
#include<iostream>

using namespace std;

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    int add(int x,int y){
        return x + y;
    }

    EMSCRIPTEN_KEEPALIVE
    int subtract(int x,int y){
        return x - y;
    }

    EMSCRIPTEN_KEEPALIVE
    int multiply(int x,int y){
        return x * y;
    }

    EMSCRIPTEN_KEEPALIVE
    int devide(int x,int y){
        return x / y;
    }
}