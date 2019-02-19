<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function about()
	{
		return "this is my home about";
	}
	public function service()
	{
		return "this is my index service";
	}
	public function index()
	{
		$title="Jeteena";
		//return view('pages.index',compact($title));//
		return view('pages.index')-> with('name',$title);
		return "this is my index page";
	}
}
