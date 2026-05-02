param (
    [string]$SourceDir = ".\assets\source_photos\raw",
    [string]$RenamedDir = ".\assets\source_photos",
    [string]$OutputDir = ".\public\images\projects"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$jpegEncoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq "image/jpeg" }

$qualityParam = New-Object System.Drawing.Imaging.EncoderParameters 1
$qualityParam.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
    [System.Drawing.Imaging.Encoder]::Quality,
    [long]82
)

$items = @(
    @{ Source = "IMG_5508.jpg"; Slug = "estate-gray-aerial" },
    @{ Source = "IMG_5511.jpg"; Slug = "charcoal-front-elevation" },
    @{ Source = "IMG_5513.jpg"; Slug = "red-standing-seam-aerial" },
    @{ Source = "IMG_5514.jpg"; Slug = "stone-estate-black-roof" },
    @{ Source = "IMG_5516.jpg"; Slug = "bronze-standing-seam-entry" },
    @{ Source = "IMG_5517.jpg"; Slug = "farmhouse-wraparound-gray-roof" },
    @{ Source = "IMG_5518.jpg"; Slug = "yard-sign-dfw" },
    @{ Source = "IMG_5519.jpg"; Slug = "charcoal-roof-topdown" },
    @{ Source = "IMG_5526.jpg"; Slug = "chimney-cap-installation" },
    @{ Source = "IMG_5530.jpg"; Slug = "shingle-install-progress" },
    @{ Source = "IMG_5534.jpg"; Slug = "modern-standing-seam-home" },
    @{ Source = "IMG_5538.jpg"; Slug = "pavilion-metal-roof" }
)

New-Item -ItemType Directory -Force $RenamedDir, $OutputDir | Out-Null

function Save-ResizedJpeg {
    param (
        [string]$InputPath,
        [string]$OutputPath,
        [int]$MaxWidth
    )

    $image = [System.Drawing.Image]::FromFile($InputPath)
    try {
        $ratio = [double]$MaxWidth / [double]$image.Width
        if ($ratio -gt 1) {
            $ratio = 1
        }

        $width = [int][Math]::Round($image.Width * $ratio)
        $height = [int][Math]::Round($image.Height * $ratio)

        $bitmap = New-Object System.Drawing.Bitmap $width, $height
        try {
            $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
            try {
                $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
                $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
                $graphics.DrawImage($image, 0, 0, $width, $height)
            }
            finally {
                $graphics.Dispose()
            }

            $bitmap.Save($OutputPath, $jpegEncoder, $qualityParam)
        }
        finally {
            $bitmap.Dispose()
        }
    }
    finally {
        $image.Dispose()
    }
}

foreach ($item in $items) {
    $sourcePath = Join-Path $SourceDir $item.Source
    if (-not (Test-Path $sourcePath)) {
        throw "Missing source image: $sourcePath"
    }

    $renamedPath = Join-Path $RenamedDir ($item.Slug + ".jpg")
    Copy-Item -LiteralPath $sourcePath -Destination $renamedPath -Force

    Save-ResizedJpeg -InputPath $sourcePath -OutputPath (Join-Path $OutputDir ($item.Slug + "-lg.jpg")) -MaxWidth 1440
    Save-ResizedJpeg -InputPath $sourcePath -OutputPath (Join-Path $OutputDir ($item.Slug + "-sm.jpg")) -MaxWidth 640
}
