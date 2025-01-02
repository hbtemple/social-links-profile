<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Social Links Profile</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-grey-900 px-300 flex gap-x-100 items-center h-screen justify-center md:p-500">
    <main id="card" class="min-w-[327px] md:min-w-[456px] lg:min-w-[384px] w-fit flex flex-col gap-y-300 p-300 md:p-500 bg-grey-800 rounded-[12px]">
        <img id="profilePic" src="{{ asset('images/avatar-jessica.jpeg') }}" alt="Profile Picture"
        class="w-[88px] h-[88px] rounded-full self-center"/>
        <div id="name-location" class="flex flex-col gap-y-50">
            <h1 class="text-preset-1 text-white self-center">Jessica Randall</h1>
            <p class="text-preset-2-bold text-green self-center">London, United Kingdom</p>
        </div>
        <p id="bio" class="text-preset-2 text-white self-center">
            "Front-end developer and avid reader."
        </p>
        <div id="links" class="flex flex-col gap-y-200">
            <x-button>Github</x-button>
            <x-button>Frontend Mentor</x-button>
            <x-button>Linkedin</x-button>
            <x-button>Twitter</x-button>
            <x-button>Instagram</x-button>
        </div>
    </main>
</body>
</html>
