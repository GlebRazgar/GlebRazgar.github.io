#!/bin/zsh

# Check if the input file is provided
if [ -z "$1" ]; then
  echo "Usage: $0 input_file.webm [output_file.gif]"
  exit 1
fi

# Set the input and output file names
input_file="$1"
output_file="${2:-output.gif}"

# Convert the webm video to gif using ffmpeg with higher quality settings
ffmpeg -i "$input_file" -vf "fps=15,scale=640:-1:flags=lanczos" -c:v gif "$output_file"

echo "Conversion complete: $output_file"