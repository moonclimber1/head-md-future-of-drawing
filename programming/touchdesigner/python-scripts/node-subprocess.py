# import subprocess


script_path = "../node-js/node-script.js"
node_path = "/Users/jonas/.nvm/versions/node/v20.9.0/bin/node"
command = node_path + " " + script_path

# process = subprocess.Popen(
#     command,
#     stdout=subprocess.PIPE,
#     stderr=subprocess.PIPE,
#     universal_newlines=True,
#     shell=True,
# )

# for line in process.stdout:
#     print(line)
#     # op("text2").write(line)

# for line in process.stderr:
#     print(line)


import asyncio
import random
import subprocess


async def send_data_to_nodejs(writer, data):
    writer.write(data.encode())
    await writer.drain()


async def read_data_from_nodejs(reader):
    data = await reader.read(100)
    return data.decode()


async def main():
    # # Spawn Node.js subprocess
    # nodejs_process = await asyncio.create_subprocess_exec(
    #     command,
    #     stdin=asyncio.subprocess.PIPE,
    #     stdout=asyncio.subprocess.PIPE,
    # )

    # Spawn Node.js subprocess using the system shell
    nodejs_process = await asyncio.create_subprocess_shell(
        command,
        stdin=asyncio.subprocess.PIPE,
        stdout=asyncio.subprocess.PIPE,
        # stderr=asyncio.subprocess.PIPE,
    )

    # Create asyncio streams for communication
    reader, writer = nodejs_process.stdout, nodejs_process.stdin

    try:
        while True:
            # Generate random values
            value1 = random.randint(1, 10)
            value2 = random.randint(1, 10)

            # Send values to Node.js
            await send_data_to_nodejs(writer, f"{value1} {value2}")

            # Read the result from Node.js
            result = await read_data_from_nodejs(reader)
            print(f"Received result: {result.strip()}")

            # Sleep for 1 second before the next iteration
            await asyncio.sleep(1)

    except asyncio.CancelledError:
        pass
    finally:
        # Close the subprocess when done
        nodejs_process.terminate()
        await nodejs_process.wait()


asyncio.run(main())
