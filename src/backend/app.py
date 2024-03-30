import cv2
import asyncio
from hume import HumeStreamClient, StreamSocket
from hume.models.config import ProsodyConfig

async def generate_frames_and_send(client, config):
    cap = cv2.VideoCapture(0)

    if not cap.isOpened():
        print("Error: Failed to access camera.")
        return

    while True:
        ret, frame = cap.read()

        if not ret:
            print("Error: Failed to capture frame from camera.")
            break

        # Convert the frame to JPEG format
        ret, buffer = cv2.imencode('.jpg', frame)

        # Ensure encoding was successful
        if not ret:
            print("Error: Failed to encode frame as JPEG.")
            break

        # Convert the buffer to bytes
        frame_bytes = buffer.tobytes()

        # Send the frame over the WebSocket connection
        try:
            async with client.connect([config]) as socket:
                print(socket)
                await socket.send_data(frame_bytes)
        except Exception as e:
            print("Error: Failed to send frame over WebSocket:", e)

    cap.release()

async def main():
    client = HumeStreamClient("0XfY5Wypb6gAnIatiATMwsNiGqRiOuUPJbJREEn5NYNGood6")
    config = ProsodyConfig()

    await generate_frames_and_send(client, config)

if __name__ == "__main__":
    asyncio.run(main())
