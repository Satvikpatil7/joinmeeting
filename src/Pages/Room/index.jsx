import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    if (!element) return; // Ensure the element is available

    try {
      const appID = 1389313936; // This should be a number
      const serverSecret = "abf1b249c5c1b1a9f8f8345616fe1cd3";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "satvik"
      );

      const zc = ZegoUIKitPrebuilt.create(kitToken);

      if (!zc) {
        console.error("Failed to initialize ZegoUIKitPrebuilt.");
        return;
      }

      zc.joinRoom({
        container: element,
        sharedLinks: [
            {
                name:"Copy Link",
                url:`https://localhost:3000/room/${roomId}`,
            },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: false,
      });
    } catch (error) {
      console.error("An error occurred during myMeeting:", error);
    }
  };

  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
};

export default RoomPage;
