<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Charts;
use App\User;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $chart = Charts::create('geo', 'highcharts') // library example 'minimalist', 'fusioncharts', 'chartsjs', 'gogole', 'material', 'highcharts', 'morris'
            ->title('website users')
            ->labels(['FR', 'ES', 'GB','US','CN'])
            ->values([100,580,720, 50,300])
            ->ElementLabel('Total users')
            ->Responsive(false)
            ->Width(0)
            ->Height(400)
            ->colors(["#e91e63","#b71c1c","#ffebee", "#64ffda","#ba68c8"])
            ;


        $chart1 = Charts::multi('bar', 'material') // library example 'minimalist', 'fusioncharts', 'chartsjs', 'gogole', 'material', 'highcharts', 'morris'
        ->responsive(false)
        ->dimensions(0, 500)
        ->colors(['#ff0000', '#00ff00', '#0000ff'])
        ->labels(['One', 'Two', 'Three'])
        ->dataset('Test 1', [1,2,3])
        ->dataset('Test 2', [0,6,0])
        ->dataset('Test 3', [3,4,1]);

        $chart2 = Charts::database(User::all(), 'bar','material') // library example 'minimalist', 'fusioncharts', 'chartsjs', 'gogole', 'material', 'highcharts', 'morris'
        ->responsive(false)
        ->width(0)
        ->groupBy('game')
/*         ->groupByYear(10)
 */      /*    ->groupByMonth('2018', true)
        ->groupByDay('06') */
        ->lastByMonth()
 ;



        return view('home', ['chart'=>$chart2]);
    }
}
