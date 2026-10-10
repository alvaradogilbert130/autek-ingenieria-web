import os

# Archivo de salida consolidado
OUTPUT_FILE = "PROYECTO_RESUMEN.md"

# Extensiones relevantes para la web / landing page
EXTS = {".astro", ".vue", ".jsx", ".tsx", ".html", ".js", ".ts", ".css", ".json"}

# Carpetas y archivos a ignorar para no saturar
IGNORE_DIRS = {
    "node_modules", ".git", ".astro", "dist", "build", ".next", 
    ".cache", "public", ".vscode", "coverage"
}
IGNORE_FILES = {
    "package-lock.json", "yarn.lock", "pnpm-lock.yaml", 
    "resumen_proyecto.py", OUTPUT_FILE
}

def generar_resumen(root_dir="."):
    tree_lines = []
    file_contents = []

    for root, dirs, files in os.walk(root_dir):
        # Filtrar carpetas excluidas en caliente
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS and not d.startswith(".")]

        rel_dir = os.path.relpath(root, root_dir)
        depth = 0 if rel_dir == "." else rel_dir.count(os.sep) + 1
        indent = "  " * depth

        folder_name = os.path.basename(root) if rel_dir != "." else "."
        tree_lines.append(f"{indent}📁 {folder_name}/")

        subindent = "  " * (depth + 1)
        for f in sorted(files):
            if f in IGNORE_FILES:
                continue
            
            _, ext = os.path.splitext(f)
            file_path = os.path.join(root, f)
            rel_file_path = os.path.relpath(file_path, root_dir)

            tree_lines.append(f"{subindent}📄 {f}")

            # Si es código relevante, capturamos su contenido
            if ext in EXTS and os.path.getsize(file_path) < 120_000:  # < 120 KB
                try:
                    with open(file_path, "r", encoding="utf-8") as file:
                        code = file.read()
                        lang = ext.replace(".", "")
                        file_contents.append(
                            f"### `{rel_file_path}`\n```{lang}\n{code}\n```\n"
                        )
                except Exception as e:
                    file_contents.append(
                        f"### `{rel_file_path}`\n*(Error al leer archivo: {e})*\n"
                    )

    # Escribir el reporte consolidado
    with open(OUTPUT_FILE, "w", encoding="utf-8") as out:
        out.write("# Resumen del Proyecto para Edición\n\n")
        out.write("## 1. Estructura de Directorios\n```text\n")
        out.write("\n".join(tree_lines))
        out.write("\n```\n\n")
        out.write("## 2. Contenido de Archivos Clave\n\n")
        out.write("\n".join(file_contents))

    print(f"[OK] Resumen generado exitosamente en: {OUTPUT_FILE}")
    print(f"-> Abre '{OUTPUT_FILE}' en Antigravity IDE, copia su contenido o las secciones del Hero/Navbar y pegalas aqui.")

if __name__ == "__main__":
    generar_resumen()
