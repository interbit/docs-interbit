{
  // ...
  "manifest": {
    "interbitRoot": {
      "chainId": "fb4f09f3d3abdf2c98ae8dcb41dcf6d070fd0dd77f0cd0119b1e2daa09243d1c",
      "validators": ["xk0EWxXLX...", "xk0EWxXMK...", "xk0EWxXLX..."],
      "covenant": "interbitRoot",
      "covenants": {
        "interbitRoot": "ea78da93b297f8cc0f352af934e29736296585fb1e9b61d3266dd7a8518f7b82",
        "hub": "70e55fc52184f26912df7323846b50eab9083472264ce9ce1e5b9b5630709761",
        "spoke": "4a90ef10c64bf51114640c6ef1e58a780b3fdb7f8457bf83fd86c3f741d3a0c7"
      },
      "joins": {
        "consume": [],
        "provide": [],
        "receiveActionFrom": [],
        "sendActionTo": [
          { "alias": "hub" },
          { "alias": "spoke1" }
        ]
      },
      "chains": {
        "hub": {
          "chainId": "ef28bf3cbb0c6b135b52176ec4b108e2b80bfe6e7ee2c0135e06f45cc9dec1ac",
          "validators": ["xk0EWxXLX...", "xk0EWxXMK...", "xk0EWxXLX..."],
          "covenant": "hub",
          "covenants": {
            "hub": "70e55fc52184f26912df7323846b50eab9083472264ce9ce1e5b9b5630709761"
          },
          "joins": {
            "provide": [
              {
                "alias": "spoke1",
                "path": [ "shared" ],
                "joinName": "SHARE"
              }
            ],
            "consume": [],
            "receiveActionFrom": [
              {
                "alias": "interbitRoot",
                "authorizedActions": [
                  "@@MANIFEST/SET_MANIFEST"
                ]
              }
            ],
            "sendActionTo": []
          },
          "chains": {},
          "hash": "c9e8fb04cff4c84c4a812cd37f0740a02d1b222b"
        },
        "spoke1": {
          "chainId": "7bb53e1e7740707bb37feccb65a9de237ade84ae60329590a25d6d545b99d9cd",
          "validators": ["xk0EWxXLX...", "xk0EWxXMK...", "xk0EWxXLX..."],
          "covenant": "spoke",
          "covenants": {
            "spoke": "4a90ef10c64bf51114640c6ef1e58a780b3fdb7f8457bf83fd86c3f741d3a0c7"
          },
          "joins": {
            "consume": [
              {
                "alias": "hub",
                "path": [ "mount", "state", "spoke1" ],
                "joinName": "SHARE"
              }
            ],
            "provide": [],
            "receiveActionFrom": [
              {
                "alias": "interbitRoot",
                "authorizedActions": [
                  "@@MANIFEST/SET_MANIFEST"
                ]
              }
            ],
            "sendActionTo": []
          },
          "chains": {},
          "hash": "2b499fe5a17403b3c8002ea4673dfc05fa95e425"
        }
      },
      "hash": "3a07f848866473bbdfb4684ca0276d3c51471818"
    }
  },
}
