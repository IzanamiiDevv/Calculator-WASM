#include<emscripten.h>
#include<iostream>

using namespace std;

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    int add(int x,int y){
        return x + y;
    }
}