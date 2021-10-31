<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \Auth;

class LandingPageController extends Controller
{
    public function index()
    {
        if(Auth::check()){
            return 'test 1200';
        }
        return view('landingPage');
    }
}
