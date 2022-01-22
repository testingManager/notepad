<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="{{url('https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="{{mix('css/app.css')}}">
    <title>{{__("Abstract")}}</title>

</head>
<body>
<div id="app">
    <app></app>
</div>
</body>
<script src="{{mix('js/app.js')}}"></script>
</html>
