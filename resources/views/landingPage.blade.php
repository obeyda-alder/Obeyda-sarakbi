<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Obeyda Sarakbi</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

            <!-- ~~~~~~~~~Styles~~~~~~~~~~~~ -->
            <link rel="stylesheet" href="{{mix('/css/all.css')}}">

    </head>
    <body>
       <div id="app">
          <main-app></main-app>
        </div>



        <!-- ~~~~~~~~~Script~~~~~~~~~~~~ -->
      <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
