cd "C:\Users\sebas\.gemini\antigravity\scratch\estudio-arquitectura-sostenible"
Write-Host "Intentando subir a GitHub (git@github.com:sebcastellanos-byte/estudio-arquitectura-sostenible.git)..."
git push -u origin main
if ($LASTEXITCODE -eq 0) {
    Write-Host "=== SUBIDA EXITOSA A GITHUB ==="
    Write-Host "Tu repositorio esta en: https://github.com/sebcastellanos-byte/estudio-arquitectura-sostenible"
} else {
    Write-Host "Asegurate de haberle dado clic a 'Create repository' en GitHub."
}
