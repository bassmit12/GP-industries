<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Status Changed</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #333;
            margin: 0;
            padding: 0;
            color: #ffffff;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #1e1e1e;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            color: #ffffff;
        }

        h1 {
            color: #915EFF;
            font-size: 24px;
            font-weight: bold;
        }

        p {
            font-size: 16px;
            line-height: 1.5;
            color: #d3d3d3;
        }

        .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 12px;
            color: #999999;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Hello {{ $ownerName }},</h1>
        <p>The status of your project "<strong>{{ $projectName }}</strong>" has been updated to
            <strong>"{{ $status }}"</strong>.</p>
        <p>Thank you for using our application!</p>

        <!-- Inline styles for button -->
        <a href="{{ route('projects.show', $project->id) }}"
            style="display: inline-block; padding: 10px 20px; margin-top: 20px; background-color: #915EFF; color: #ffffff; text-decoration: none; border-radius: 5px;">
            View Project
        </a>

        <div class="footer">
            <p>&copy; {{ date('Y') }} GP Industries. All rights reserved.</p>
        </div>
    </div>
</body>

</html>