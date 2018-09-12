{
  "peers": ["localhost:5000", "localhost:5050"],
  "apps": {
    "example": {
      "appChain": "",
      "buildLocation": "../../example/build",
      "browserChains": [
        "hub", "spoke1"
      ]
    }
  },
  "chains": {
    "hub": "ef28bf3cbb0c6b135b52176ec4b108e2b80bfe6e7ee2c0135e06f45cc9dec1ac",
    "spoke1": "7bb53e1e7740707bb37feccb65a9de237ade84ae60329590a25d6d545b99d9cd",
    "interbitRoot": "fb4f09f3d3abdf2c98ae8dcb41dcf6d070fd0dd77f0cd0119b1e2daa09243d1c"
  },
  "covenants": {
    "hub": {
      "hash": "70e55fc52184f26912df7323846b50eab9083472264ce9ce1e5b9b5630709761",
      "filename": "covenants/70e55fc52184f26912df7323846b50eab9083472264ce9ce1e5b9b5630709761.tgz"
    },
    "spoke": {
      "hash": "4a90ef10c64bf51114640c6ef1e58a780b3fdb7f8457bf83fd86c3f741d3a0c7",
      "filename": "covenants/4a90ef10c64bf51114640c6ef1e58a780b3fdb7f8457bf83fd86c3f741d3a0c7.tgz"
    },
    "interbitRoot": {
      "hash": "ea78da93b297f8cc0f352af934e29736296585fb1e9b61d3266dd7a8518f7b82",
      "filename": "covenants/ea78da93b297f8cc0f352af934e29736296585fb1e9b61d3266dd7a8518f7b82.tgz"
    }
  },
  "genesisBlocks": {
    "hub": {
      "content": {
        "previousHash": "genesis",
        "stateHash": "57bc1b5c2de7f57968c9f993e50e51bad3f81759f4f03b7c471e044c1207be3b",
        "actions": [],
        "errors": {},
        "redispatches": {},
        "height": 0,
        "timestamp": 1533851731887,
        "seed": 0.21540853907877433,
        "configChanged": true,
        "timeToCreateBlock": 0,
        "state": {
          "interbit": {
            "config": {
              "consensus": "PoA",
              "providing": [],
              "consuming": [],
              "acl": {
                "actionPermissions": {
                  "*": [ "root" ]
                },
                "roles": {
                  "root": [
                    "xk0EWxXLXgEB/1ZDEin4DMhsR9XN3PzYqVbyf7YsOXoF1E5ZEn2jTrh9e6kU8+zLfiaysPc4PntHAzDHWB2DjJv8+if8nTvTyGEAEQEAAc0NPGluZm9AYnRs\nLmNvPsJ1BBABCAApBQJbFcteBgsJBwgDAgkQeEalLevEq6kEFQgKAgMWAgEC\nGQECGwMCHgEAAI60Af9FavirDL2L6pl6iywR9RV1qLrEgEtN/eMOKVj+3Tzt\n00dE12onmnWw2rcl1Amc0ZmM87vwGWYxoiRBt8tqqEbfzk0EWxXLXgECAMO+\nizeYvgWINZAtqSbn6k55j8xN9b7hVBmCrIr0PBUmg//rFCqYuelAGuEbkW+K\nv/pQki59N2lU9xucR9MhxSsAEQEAAcJfBBgBCAATBQJbFcteCRB4RqUt68Sr\nqQIbDAAAq9cB/Ax+0dq+pQN8lnkpqvQQKzUxHaiNsPbinU1XqcA51V/sGCiv\nuuOMrvm+y6jSf10lDNP7u/rGQRwSjTQ77rn5b5Q="
                  ]
                }
              },
              "blockMaster": "xk0EWxXLXgEB/1ZDEin4DMhsR9XN3PzYqVbyf7YsOXoF1E5ZEn2jTrh9e6kU8+zLfiaysPc4PntHAzDHWB2DjJv8+if8nTvTyGEAEQEAAc0NPGluZm9AYnRs\nLmNvPsJ1BBABCAApBQJbFcteBgsJBwgDAgkQeEalLevEq6kEFQgKAgMWAgEC\nGQECGwMCHgEAAI60Af9FavirDL2L6pl6iywR9RV1qLrEgEtN/eMOKVj+3Tzt\n00dE12onmnWw2rcl1Amc0ZmM87vwGWYxoiRBt8tqqEbfzk0EWxXLXgECAMO+\nizeYvgWINZAtqSbn6k55j8xN9b7hVBmCrIr0PBUmg//rFCqYuelAGuEbkW+K\nv/pQki59N2lU9xucR9MhxSsAEQEAAcJfBBgBCAATBQJbFcteCRB4RqUt68Sr\nqQIbDAAAq9cB/Ax+0dq+pQN8lnkpqvQQKzUxHaiNsPbinU1XqcA51V/sGCiv\nuuOMrvm+y6jSf10lDNP7u/rGQRwSjTQ77rn5b5Q="
            },
            "configChanges": {}
          }
        }
      },
      "contentHash": "4192bad1e79f3a7d3d6b0c207fe1fff1fda57c67b0382b220023aed8ee342631",
      "signatures": {
        "GENESIS": "GENESIS"
      },
      "signaturesHash": "5802612e380de8f088c9c9ab28412e853d75d86eed65d8415bca52daac7681ce",
      "blockHash": "ef28bf3cbb0c6b135b52176ec4b108e2b80bfe6e7ee2c0135e06f45cc9dec1ac"
    },
    "spoke1": {
      "content": {
        "previousHash": "genesis",
        "stateHash": "57bc1b5c2de7f57968c9f993e50e51bad3f81759f4f03b7c471e044c1207be3b",
        "actions": [],
        "errors": {},
        "redispatches": {},
        "height": 0,
        "timestamp": 1533851731883,
        "seed": 0.3796188923810617,
        "configChanged": true,
        "timeToCreateBlock": 0,
        "state": {
          "interbit": {
            "config": {
              "consensus": "PoA",
              "providing": [],
              "consuming": [],
              "acl": {
                "actionPermissions": {
                  "*": [ "root" ]
                },
                "roles": {
                  "root": [
                    "xk0EWxXLXgEB/1ZDEin4DMhsR9XN3PzYqVbyf7YsOXoF1E5ZEn2jTrh9e6kU8+zLfiaysPc4PntHAzDHWB2DjJv8+if8nTvTyGEAEQEAAc0NPGluZm9AYnRs\nLmNvPsJ1BBABCAApBQJbFcteBgsJBwgDAgkQeEalLevEq6kEFQgKAgMWAgEC\nGQECGwMCHgEAAI60Af9FavirDL2L6pl6iywR9RV1qLrEgEtN/eMOKVj+3Tzt\n00dE12onmnWw2rcl1Amc0ZmM87vwGWYxoiRBt8tqqEbfzk0EWxXLXgECAMO+\nizeYvgWINZAtqSbn6k55j8xN9b7hVBmCrIr0PBUmg//rFCqYuelAGuEbkW+K\nv/pQki59N2lU9xucR9MhxSsAEQEAAcJfBBgBCAATBQJbFcteCRB4RqUt68Sr\nqQIbDAAAq9cB/Ax+0dq+pQN8lnkpqvQQKzUxHaiNsPbinU1XqcA51V/sGCiv\nuuOMrvm+y6jSf10lDNP7u/rGQRwSjTQ77rn5b5Q="
                  ]
                }
              },
              "blockMaster": "xk0EWxXLXgEB/1ZDEin4DMhsR9XN3PzYqVbyf7YsOXoF1E5ZEn2jTrh9e6kU8+zLfiaysPc4PntHAzDHWB2DjJv8+if8nTvTyGEAEQEAAc0NPGluZm9AYnRs\nLmNvPsJ1BBABCAApBQJbFcteBgsJBwgDAgkQeEalLevEq6kEFQgKAgMWAgEC\nGQECGwMCHgEAAI60Af9FavirDL2L6pl6iywR9RV1qLrEgEtN/eMOKVj+3Tzt\n00dE12onmnWw2rcl1Amc0ZmM87vwGWYxoiRBt8tqqEbfzk0EWxXLXgECAMO+\nizeYvgWINZAtqSbn6k55j8xN9b7hVBmCrIr0PBUmg//rFCqYuelAGuEbkW+K\nv/pQki59N2lU9xucR9MhxSsAEQEAAcJfBBgBCAATBQJbFcteCRB4RqUt68Sr\nqQIbDAAAq9cB/Ax+0dq+pQN8lnkpqvQQKzUxHaiNsPbinU1XqcA51V/sGCiv\nuuOMrvm+y6jSf10lDNP7u/rGQRwSjTQ77rn5b5Q="
            },
            "configChanges": {}
          }
        }
      },
      "contentHash": "30078c5e46dce12176d8e4f150df74dd2c46c14bf767a3e1508181ed6daa07dc",
      "signatures": {
        "GENESIS": "GENESIS"
      },
      "signaturesHash": "5802612e380de8f088c9c9ab28412e853d75d86eed65d8415bca52daac7681ce",
      "blockHash": "7bb53e1e7740707bb37feccb65a9de237ade84ae60329590a25d6d545b99d9cd"
    },
    "interbitRoot": {
      "content": {
        "previousHash": "genesis",
        "stateHash": "430a06932fcb915576ef9452262bd16c242c1257f39ee2df644b7cf485ad0327",
        "actions": [],
        "errors": {},
        "redispatches": {},
        "height": 0,
        "timestamp": 1533851731889,
        "seed": 0.7000438987271005,
        "configChanged": true,
        "timeToCreateBlock": 1,
        "state": {
          "interbit": {
            "config": {
              "consensus": "PoA",
              "providing": [],
              "consuming": [],
              "acl": {
                "actionPermissions": {
                  "*": [ "root" ]
                },
                "roles": {
                  "root": [
                    "xk0EWxXLXgEB/1ZDEin4DMhsR9XN3PzYqVbyf7YsOXoF1E5ZEn2jTrh9e6kU8+zLfiaysPc4PntHAzDHWB2DjJv8+if8nTvTyGEAEQEAAc0NPGluZm9AYnRs\nLmNvPsJ1BBABCAApBQJbFcteBgsJBwgDAgkQeEalLevEq6kEFQgKAgMWAgEC\nGQECGwMCHgEAAI60Af9FavirDL2L6pl6iywR9RV1qLrEgEtN/eMOKVj+3Tzt\n00dE12onmnWw2rcl1Amc0ZmM87vwGWYxoiRBt8tqqEbfzk0EWxXLXgECAMO+\nizeYvgWINZAtqSbn6k55j8xN9b7hVBmCrIr0PBUmg//rFCqYuelAGuEbkW+K\nv/pQki59N2lU9xucR9MhxSsAEQEAAcJfBBgBCAATBQJbFcteCRB4RqUt68Sr\nqQIbDAAAq9cB/Ax+0dq+pQN8lnkpqvQQKzUxHaiNsPbinU1XqcA51V/sGCiv\nuuOMrvm+y6jSf10lDNP7u/rGQRwSjTQ77rn5b5Q=",
                    "xk0EWxXMKAECAI+weRG4JyZaoxsFX8TQDQtQXVYk2gabygm7as4+f+0+py+FErkKIbz8m0r6A+UrmKYaD/fksj2DGRKn/7Ohv7EAEQEAAc0NPGluZm9AYnRs\nLmNvPsJ1BBABCAApBQJbFcwoBgsJBwgDAgkQmTQy2zEs+JUEFQgKAgMWAgEC\nGQECGwMCHgEAAOr4Af4sl2I7QkkJvdTSMPeUJNKtj45ArxBHmbLjpYuVTpnM\nLr2DJmlNFiYgZlZkExYEI5Gm3CxyHJeq/elBSe5V613Ozk0EWxXMKAEB/3LI\nfXPVHtBtHKVE+Zveb29bmDK/l6t0w+UYIw0qpJekjaFrrLtHm5ML9BwJCBei\nea1VCL/SGTf478lZZ7My+K0AEQEAAcJfBBgBCAATBQJbFcwoCRCZNDLbMSz4\nlQIbDAAA7U8B/iloThYXFYC7IU45OqWcr5uT72ZlSaUmxKcktcjA9DRH4GVg\nZysmi4/kjUvb+qoA9GIoc7MfXxw32zkNL8YjW9c="
                  ]
                }
              },
              "blockMaster": "xk0EWxXLXgEB/1ZDEin4DMhsR9XN3PzYqVbyf7YsOXoF1E5ZEn2jTrh9e6kU8+zLfiaysPc4PntHAzDHWB2DjJv8+if8nTvTyGEAEQEAAc0NPGluZm9AYnRs\nLmNvPsJ1BBABCAApBQJbFcteBgsJBwgDAgkQeEalLevEq6kEFQgKAgMWAgEC\nGQECGwMCHgEAAI60Af9FavirDL2L6pl6iywR9RV1qLrEgEtN/eMOKVj+3Tzt\n00dE12onmnWw2rcl1Amc0ZmM87vwGWYxoiRBt8tqqEbfzk0EWxXLXgECAMO+\nizeYvgWINZAtqSbn6k55j8xN9b7hVBmCrIr0PBUmg//rFCqYuelAGuEbkW+K\nv/pQki59N2lU9xucR9MhxSsAEQEAAcJfBBgBCAATBQJbFcteCRB4RqUt68Sr\nqQIbDAAAq9cB/Ax+0dq+pQN8lnkpqvQQKzUxHaiNsPbinU1XqcA51V/sGCiv\nuuOMrvm+y6jSf10lDNP7u/rGQRwSjTQ77rn5b5Q="
            },
            "configChanges": {}
          }
        }
      },
      "contentHash": "3cc4a35b27b95346c67925767050c586d96cac2c10021e2041295ab6fdf01241",
      "signatures": {
        "GENESIS": "GENESIS"
      },
      "signaturesHash": "5802612e380de8f088c9c9ab28412e853d75d86eed65d8415bca52daac7681ce",
      "blockHash": "fb4f09f3d3abdf2c98ae8dcb41dcf6d070fd0dd77f0cd0119b1e2daa09243d1c"
    }
  },
  "manifest": {
    "interbitRoot": {
      "chainId": "fb4f09f3d3abdf2c98ae8dcb41dcf6d070fd0dd77f0cd0119b1e2daa09243d1c",
      "validators": [
        "xk0EWxXLXgEB/1ZDEin4DMhsR9XN3PzYqVbyf7YsOXoF1E5ZEn2jTrh9e6kU8+zLfiaysPc4PntHAzDHWB2DjJv8+if8nTvTyGEAEQEAAc0NPGluZm9AYnRs\nLmNvPsJ1BBABCAApBQJbFcteBgsJBwgDAgkQeEalLevEq6kEFQgKAgMWAgEC\nGQECGwMCHgEAAI60Af9FavirDL2L6pl6iywR9RV1qLrEgEtN/eMOKVj+3Tzt\n00dE12onmnWw2rcl1Amc0ZmM87vwGWYxoiRBt8tqqEbfzk0EWxXLXgECAMO+\nizeYvgWINZAtqSbn6k55j8xN9b7hVBmCrIr0PBUmg//rFCqYuelAGuEbkW+K\nv/pQki59N2lU9xucR9MhxSsAEQEAAcJfBBgBCAATBQJbFcteCRB4RqUt68Sr\nqQIbDAAAq9cB/Ax+0dq+pQN8lnkpqvQQKzUxHaiNsPbinU1XqcA51V/sGCiv\nuuOMrvm+y6jSf10lDNP7u/rGQRwSjTQ77rn5b5Q=",
        "xk0EWxXMKAECAI+weRG4JyZaoxsFX8TQDQtQXVYk2gabygm7as4+f+0+py+FErkKIbz8m0r6A+UrmKYaD/fksj2DGRKn/7Ohv7EAEQEAAc0NPGluZm9AYnRs\nLmNvPsJ1BBABCAApBQJbFcwoBgsJBwgDAgkQmTQy2zEs+JUEFQgKAgMWAgEC\nGQECGwMCHgEAAOr4Af4sl2I7QkkJvdTSMPeUJNKtj45ArxBHmbLjpYuVTpnM\nLr2DJmlNFiYgZlZkExYEI5Gm3CxyHJeq/elBSe5V613Ozk0EWxXMKAEB/3LI\nfXPVHtBtHKVE+Zveb29bmDK/l6t0w+UYIw0qpJekjaFrrLtHm5ML9BwJCBei\nea1VCL/SGTf478lZZ7My+K0AEQEAAcJfBBgBCAATBQJbFcwoCRCZNDLbMSz4\nlQIbDAAA7U8B/iloThYXFYC7IU45OqWcr5uT72ZlSaUmxKcktcjA9DRH4GVg\nZysmi4/kjUvb+qoA9GIoc7MfXxw32zkNL8YjW9c=",
        "xk0EWxXLXgEB/1ZDEin4DMhsR9XN3PzYqVbyf7YsOXoF1E5ZEn2jTrh9e6kU8+zLfiaysPc4PntHAzDHWB2DjJv8+if8nTvTyGEAEQEAAc0NPGluZm9AYnRs\nLmNvPsJ1BBABCAApBQJbFcteBgsJBwgDAgkQeEalLevEq6kEFQgKAgMWAgEC\nGQECGwMCHgEAAI60Af9FavirDL2L6pl6iywR9RV1qLrEgEtN/eMOKVj+3Tzt\n00dE12onmnWw2rcl1Amc0ZmM87vwGWYxoiRBt8tqqEbfzk0EWxXLXgECAMO+\nizeYvgWINZAtqSbn6k55j8xN9b7hVBmCrIr0PBUmg//rFCqYuelAGuEbkW+K\nv/pQki59N2lU9xucR9MhxSsAEQEAAcJfBBgBCAATBQJbFcteCRB4RqUt68Sr\nqQIbDAAAq9cB/Ax+0dq+pQN8lnkpqvQQKzUxHaiNsPbinU1XqcA51V/sGCiv\nuuOMrvm+y6jSf10lDNP7u/rGQRwSjTQ77rn5b5Q="
      ],
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
          "validators": [
            "xk0EWxXLXgEB/1ZDEin4DMhsR9XN3PzYqVbyf7YsOXoF1E5ZEn2jTrh9e6kU8+zLfiaysPc4PntHAzDHWB2DjJv8+if8nTvTyGEAEQEAAc0NPGluZm9AYnRs\nLmNvPsJ1BBABCAApBQJbFcteBgsJBwgDAgkQeEalLevEq6kEFQgKAgMWAgEC\nGQECGwMCHgEAAI60Af9FavirDL2L6pl6iywR9RV1qLrEgEtN/eMOKVj+3Tzt\n00dE12onmnWw2rcl1Amc0ZmM87vwGWYxoiRBt8tqqEbfzk0EWxXLXgECAMO+\nizeYvgWINZAtqSbn6k55j8xN9b7hVBmCrIr0PBUmg//rFCqYuelAGuEbkW+K\nv/pQki59N2lU9xucR9MhxSsAEQEAAcJfBBgBCAATBQJbFcteCRB4RqUt68Sr\nqQIbDAAAq9cB/Ax+0dq+pQN8lnkpqvQQKzUxHaiNsPbinU1XqcA51V/sGCiv\nuuOMrvm+y6jSf10lDNP7u/rGQRwSjTQ77rn5b5Q=",
            "xk0EWxXMKAECAI+weRG4JyZaoxsFX8TQDQtQXVYk2gabygm7as4+f+0+py+FErkKIbz8m0r6A+UrmKYaD/fksj2DGRKn/7Ohv7EAEQEAAc0NPGluZm9AYnRs\nLmNvPsJ1BBABCAApBQJbFcwoBgsJBwgDAgkQmTQy2zEs+JUEFQgKAgMWAgEC\nGQECGwMCHgEAAOr4Af4sl2I7QkkJvdTSMPeUJNKtj45ArxBHmbLjpYuVTpnM\nLr2DJmlNFiYgZlZkExYEI5Gm3CxyHJeq/elBSe5V613Ozk0EWxXMKAEB/3LI\nfXPVHtBtHKVE+Zveb29bmDK/l6t0w+UYIw0qpJekjaFrrLtHm5ML9BwJCBei\nea1VCL/SGTf478lZZ7My+K0AEQEAAcJfBBgBCAATBQJbFcwoCRCZNDLbMSz4\nlQIbDAAA7U8B/iloThYXFYC7IU45OqWcr5uT72ZlSaUmxKcktcjA9DRH4GVg\nZysmi4/kjUvb+qoA9GIoc7MfXxw32zkNL8YjW9c=",
            "xk0EWxXLXgEB/1ZDEin4DMhsR9XN3PzYqVbyf7YsOXoF1E5ZEn2jTrh9e6kU8+zLfiaysPc4PntHAzDHWB2DjJv8+if8nTvTyGEAEQEAAc0NPGluZm9AYnRs\nLmNvPsJ1BBABCAApBQJbFcteBgsJBwgDAgkQeEalLevEq6kEFQgKAgMWAgEC\nGQECGwMCHgEAAI60Af9FavirDL2L6pl6iywR9RV1qLrEgEtN/eMOKVj+3Tzt\n00dE12onmnWw2rcl1Amc0ZmM87vwGWYxoiRBt8tqqEbfzk0EWxXLXgECAMO+\nizeYvgWINZAtqSbn6k55j8xN9b7hVBmCrIr0PBUmg//rFCqYuelAGuEbkW+K\nv/pQki59N2lU9xucR9MhxSsAEQEAAcJfBBgBCAATBQJbFcteCRB4RqUt68Sr\nqQIbDAAAq9cB/Ax+0dq+pQN8lnkpqvQQKzUxHaiNsPbinU1XqcA51V/sGCiv\nuuOMrvm+y6jSf10lDNP7u/rGQRwSjTQ77rn5b5Q="
          ],
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
              },
              {
                alias: 'hub',
                authorizedActions: ['DO_A_SPOKE_THING']
              }
            ],
            "sendActionTo": []
          },
          "chains": {},
          "hash": "c9e8fb04cff4c84c4a812cd37f0740a02d1b222b"
        },
        "spoke1": {
          "chainId": "7bb53e1e7740707bb37feccb65a9de237ade84ae60329590a25d6d545b99d9cd",
          "validators": [
            "xk0EWxXLXgEB/1ZDEin4DMhsR9XN3PzYqVbyf7YsOXoF1E5ZEn2jTrh9e6kU8+zLfiaysPc4PntHAzDHWB2DjJv8+if8nTvTyGEAEQEAAc0NPGluZm9AYnRs\nLmNvPsJ1BBABCAApBQJbFcteBgsJBwgDAgkQeEalLevEq6kEFQgKAgMWAgEC\nGQECGwMCHgEAAI60Af9FavirDL2L6pl6iywR9RV1qLrEgEtN/eMOKVj+3Tzt\n00dE12onmnWw2rcl1Amc0ZmM87vwGWYxoiRBt8tqqEbfzk0EWxXLXgECAMO+\nizeYvgWINZAtqSbn6k55j8xN9b7hVBmCrIr0PBUmg//rFCqYuelAGuEbkW+K\nv/pQki59N2lU9xucR9MhxSsAEQEAAcJfBBgBCAATBQJbFcteCRB4RqUt68Sr\nqQIbDAAAq9cB/Ax+0dq+pQN8lnkpqvQQKzUxHaiNsPbinU1XqcA51V/sGCiv\nuuOMrvm+y6jSf10lDNP7u/rGQRwSjTQ77rn5b5Q=",
            "xk0EWxXMKAECAI+weRG4JyZaoxsFX8TQDQtQXVYk2gabygm7as4+f+0+py+FErkKIbz8m0r6A+UrmKYaD/fksj2DGRKn/7Ohv7EAEQEAAc0NPGluZm9AYnRs\nLmNvPsJ1BBABCAApBQJbFcwoBgsJBwgDAgkQmTQy2zEs+JUEFQgKAgMWAgEC\nGQECGwMCHgEAAOr4Af4sl2I7QkkJvdTSMPeUJNKtj45ArxBHmbLjpYuVTpnM\nLr2DJmlNFiYgZlZkExYEI5Gm3CxyHJeq/elBSe5V613Ozk0EWxXMKAEB/3LI\nfXPVHtBtHKVE+Zveb29bmDK/l6t0w+UYIw0qpJekjaFrrLtHm5ML9BwJCBei\nea1VCL/SGTf478lZZ7My+K0AEQEAAcJfBBgBCAATBQJbFcwoCRCZNDLbMSz4\nlQIbDAAA7U8B/iloThYXFYC7IU45OqWcr5uT72ZlSaUmxKcktcjA9DRH4GVg\nZysmi4/kjUvb+qoA9GIoc7MfXxw32zkNL8YjW9c=",
            "xk0EWxXLXgEB/1ZDEin4DMhsR9XN3PzYqVbyf7YsOXoF1E5ZEn2jTrh9e6kU8+zLfiaysPc4PntHAzDHWB2DjJv8+if8nTvTyGEAEQEAAc0NPGluZm9AYnRs\nLmNvPsJ1BBABCAApBQJbFcteBgsJBwgDAgkQeEalLevEq6kEFQgKAgMWAgEC\nGQECGwMCHgEAAI60Af9FavirDL2L6pl6iywR9RV1qLrEgEtN/eMOKVj+3Tzt\n00dE12onmnWw2rcl1Amc0ZmM87vwGWYxoiRBt8tqqEbfzk0EWxXLXgECAMO+\nizeYvgWINZAtqSbn6k55j8xN9b7hVBmCrIr0PBUmg//rFCqYuelAGuEbkW+K\nv/pQki59N2lU9xucR9MhxSsAEQEAAcJfBBgBCAATBQJbFcteCRB4RqUt68Sr\nqQIbDAAAq9cB/Ax+0dq+pQN8lnkpqvQQKzUxHaiNsPbinU1XqcA51V/sGCiv\nuuOMrvm+y6jSf10lDNP7u/rGQRwSjTQ77rn5b5Q="
          ],
          "covenant": "spoke",
          "covenants": {
            "spoke": "4a90ef10c64bf51114640c6ef1e58a780b3fdb7f8457bf83fd86c3f741d3a0c7"
          },
          "joins": {
            "consume": [
              {
                "alias": "hub",
                "path": ["mount", "state", "spoke1"],
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
              },
              {
                alias: 'spoke',
                authorizedActions: ['DO_A_HUB_THING']
              }
            ],
            "sendActionTo": [{ alias: 'spoke1' }]
          },
          "chains": {},
          "hash": "2b499fe5a17403b3c8002ea4673dfc05fa95e425"
        }
      },
      "hash": "3a07f848866473bbdfb4684ca0276d3c51471818"
    }
  },
  "hash": "89bf5072b5dc631b49510d3803d40cf44651cfc8"
}
