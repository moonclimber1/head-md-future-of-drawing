import subprocess

print("hi")

script_path = "../node-js/node-script.js"

node_path = "/Users/jonas/.nvm/versions/node/v20.9.0/bin/node"
command = node_path + " " + script_path

process = subprocess.Popen(
    command,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
    universal_newlines=True,
    shell=True,
)

print("yo")

for line in process.stdout:
    print(line)
    # op("text2").write(line)

for line in process.stderr:
    print(line)

print("lo")
