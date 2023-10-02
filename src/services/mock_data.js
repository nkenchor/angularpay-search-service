export const mockdata = () => {
  return [
    {
      "reference": "e6af6de9-e9fc-4b54-a841-7ed902bbe559",
      "request_tag": "@pmtsep01211",
      "service_reference": "988b4529-57ee-42d9-b12a-ab96c2233c92",
      "service_code": "PMT",
      "created_on": "2021-08-26T07:40:00",
      "amount": {
      "currency": "USD",
      "value": 10000
    },
    "excahnge_rate": {
      "from": "USD",
      "to": "NGN",
      "rate": "500",
      "date": "2018-02-13",
      "type": "INVESTEE_RATE|BARGAIN_RATE|OFFICIAL_RATE"
    },
    "investee": {
      "user_reference": "836db867-98bb-4a1f-aa9e-9db76eac584a"
    },
    "investors": [
      {
        "reference": "1fdecf7a-fe4d-4273-b36e-0340e8535a5f",
        "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810",
        "amount": {
          "currency": "USD",
          "value": 2000
        },
        "created_on": "2021-08-26T07:40:00"
      }
    ],
    "bargain": {
      "offers": [
        {
          "reference": "19c0ec36-3989-452f-b135-e3dc00bdd025",
          "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810",
          "status": "PENDING|ACCEPTED|REJECTED",
          "excahnge_rate": {
          "from": "USD",
            "to": "NGN",
            "rate": "510"
          }
        }
      ],
      "accepted_bargain_reference": "19c0ec36-3989-452f-b135-e3dc00bdd025"
    },
      "status": "ACTIVE|INACTIVE|COMPLETED|CANCELLED"
    },
    {
      "reference": "e6af6de9-e9fc-4b54-a841-7ed902bbe559",
      "request_tag": "@pfssep01211",
      "service_reference": "988b4529-57ee-42d9-b12a-ab96c2233c92",
      "service_code": "PEER_FUND",
      "created_on": "2021-08-26T07:40:00",
      "verified": true,
      "summary": "XYZ Ltd business loan request",
      "amount": {
      "currency": "USD",
      "value": 10000
    },
    "interest_rate_percent": 5,
    "matures_on": "2021-08-26T07:40:00",
    "investee": {
    "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810"
    },
    "investors": [
      {
        "reference": "1fdecf7a-fe4d-4273-b36e-0340e8535a5f",
        "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810",
        "amount": {
        "currency": "USD",
        "value": 2000
        },
        "created_on": "2021-08-26T07:40:00"
      }
    ],
    "bargain": {
      "offers": [
      {
        "reference": "19c0ec36-3989-452f-b135-e3dc00bdd025",
        "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810",
        "status": "PENDING|ACCEPTED|REJECTED",
        "interest_rate_percent": 10}
        ],
        "accepted_bargain_reference": "19c0ec36-3989-452f-b135-e3dc00bdd025"
      },
      "status": "ACTIVE|INACTIVE|COMPLETED|CANCELLED"
    },
    {
    "reference": "e6af6de9-e9fc-4b54-a841-7ed902bbe559",
    "request_tag": "@crysep01211",
    "service_reference": "988b4529-57ee-42d9-b12a-ab96c2233c92",
    "service_code": "CRYPTO",
    "created_on": "2021-08-26T07:40:00",
    "amount": {
    "currency": "BTC",
    "value": 2
    },
    "excahnge_rate": {
    "from": "BTC",
    "to": "USD",
    "rate": "52000",
    "date": "2018-02-13",
    "type": "INVESTEE_RATE|BARGAIN_RATE|OFFICIAL_RATE"
    },
    "investee": {
    "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810"
    },
    "investors": [
      {
        "reference": "1fdecf7a-fe4d-4273-b36e-0340e8535a5f",
        "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810",
        "amount": {
        "currency": "USD",
        "value": 32000
      },
        "created_on": "2021-08-26T07:40:00"
      }
    ],
    "bargain": {
      "offers": [
        {
          "reference": "19c0ec36-3989-452f-b135-e3dc00bdd025",
          "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810",
          "status": "PENDING|ACCEPTED|REJECTED",
          "excahnge_rate": {
            "from": "BTC",
            "to": "USD",
            "rate": "42000"
          }
        }
      ],
      "accepted_bargain_reference": "19c0ec36-3989-452f-b135-e3dc00bdd025"
    },
      "status": "ACTIVE|INACTIVE|COMPLETED|CANCELLED"
    },
      {
        "reference": "e6af6de9-e9fc-4b54-a841-7ed902bbe559",
        "request_tag": "@pthsep01211",
        "service_reference": "988b4529-57ee-42d9-b12a-ab96c2233c92",
        "service_code": "PITCH",
        "created_on": "2021-08-26T07:40:00",
        "verified": true,
        "summary": "Unicron agro-tech early-growth company wants to expand its business",
        "amount": {
        "currency": "USD",
        "value": 5000000
      },
    "equity_percent": 5,
    "investee": {
    "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810"
    },
    "investors": [
      {
        "reference": "1fdecf7a-fe4d-4273-b36e-0340e8535a5f",
        "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810",
        "created_on": "2021-08-26T07:40:00",
        "amount": {
        "currency": "USD",
        "value": 2000
        }
      }
    ],
      "bargain": {
        "offers": [
          {
          "reference": "19c0ec36-3989-452f-b135-e3dc00bdd025",
          "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810",
          "status": "PENDING|ACCEPTED|REJECTED",
          "equity_percent": 25
          }
        ],
        "accepted_bargain_reference": "19c0ec36-3989-452f-b135-e3dc00bdd025"
      },
      "status": "ACTIVE|INACTIVE|COMPLETED|CANCELLED"
    },
    {
      "reference": "e6af6de9-e9fc-4b54-a841-7ed902bbe559",
      "request_tag": "@supsep01211",
      "service_reference": "988b4529-57ee-42d9-b12a-ab96c2233c92",
      "service_code": "SUPPLY",
      "created_on": "2021-08-26T07:40:00",
      "verified": true,
      "summary": "ABC Contruction needs 5000 pieces of lumber supplies",
      "commodity": {
      "name": "lumber supplies",
      "description": "lumber supplies",
      "quantity": 5000,
      "unit_price": {
      "currency": "USD",
      "value": 100
    },
    "total_amount": {
      "currency": "USD",
      "value": 500000
    }
    },
    "investee": {
      "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810"
    },
    "investors": [
    {
    "reference": "1fdecf7a-fe4d-4273-b36e-0340e8535a5f",
    "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810",
    "supplying": {
    "quantity": 100,
    "total_amount": {
    "currency": "USD",
    "value": 10000
    }
    },
    "created_on": "2021-08-26T07:40:00"
    }
    ],
    "bargain": {
    "offers": [
    {
    "reference": "19c0ec36-3989-452f-b135-e3dc00bdd025",
    "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810",
    "status": "PENDING|ACCEPTED|REJECTED",
    "unit_price": {"currency": "USD",
    "value": 250
    }
    }
    ],
    "accepted_bargain_reference": "19c0ec36-3989-452f-b135-e3dc00bdd025"
    },
    "status": "ACTIVE|INACTIVE|COMPLETED|CANCELLED"
    },
    {
    "reference": "e6af6de9-e9fc-4b54-a841-7ed902bbe559",
    "request_tag": "@mensep01211",
    "service_reference": "988b4529-57ee-42d9-b12a-ab96c2233c92",
    "service_code": "MENIAL",
    "created_on": "2021-08-26T07:40:00",
    "summary": "Need a mechanic to fix my car",
    "amount": {
    "currency": "NGN",
    "value": 15000
    },
    "investee": {
    "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810"
    },
    "investors": [
    {
    "reference": "1fdecf7a-fe4d-4273-b36e-0340e8535a5f",
    "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810",
    "created_on": "2021-08-26T07:40:00"
    }
    ],
    "bargain": {
    "offers": [
    {
    "reference": "19c0ec36-3989-452f-b135-e3dc00bdd025",
    "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810",
    "status": "PENDING|ACCEPTED|REJECTED",
    "amount": {
    "currency": "NGN",
    "value": 45000
    }
    }
    ],
    "accepted_bargain_reference": "19c0ec36-3989-452f-b135-e3dc00bdd025"
    },
    "status": "ACTIVE|INACTIVE|COMPLETED|CANCELLED"
    },{
    "reference": "e6af6de9-e9fc-4b54-a841-7ed902bbe559",
    "request_tag": "@pnbsep01211",
    "service_reference": "988b4529-57ee-42d9-b12a-ab96c2233c92",
    "service_code": "PAYNABLE",
    "created_on": "2021-08-26T07:40:00",
    "amount": {
    "currency": "NGN",
    "value": 250000
    },
    "interest_rate_percent": 2,
    "matures_on": "2021-08-26T07:40:00",
    "investee": {
    "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810"
    },
    "investors": [
    {
    "reference": "1fdecf7a-fe4d-4273-b36e-0340e8535a5f",
    "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810",
    "amount": {
    "currency": "USD",
    "value": 2000
    },
    "created_on": "2021-08-26T07:40:00"
    }
    ],
    "bargain": {
    "offers": [
    {
    "reference": "19c0ec36-3989-452f-b135-e3dc00bdd025",
    "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810",
    "status": "PENDING|ACCEPTED|REJECTED",
    "interest_rate_percent": 5
    }
    ],
    "accepted_bargain_reference": "19c0ec36-3989-452f-b135-e3dc00bdd025"
    },
    "status": "ACTIVE|INACTIVE|COMPLETED|CANCELLED"
    },
    {
    "reference": "e6af6de9-e9fc-4b54-a841-7ed902bbe559",
    "request_tag": "@ssvsep01211",
    "service_reference": "988b4529-57ee-42d9-b12a-ab96c2233c92",
    "service_code": "SMART_SAVE",
    "created_on": "2021-08-26T07:40:00",
    "spent_amount": {
    "currency": "USD","value": 300
    },
    "matures_on": "2021-08-26T07:40:00",
    "applicable_goal": {
    "from": {
    "currency": "USD",
    "value": 100
    },
    "to": {
    "currency": "USD",
    "value": 500
    },
    "save_percent": 5
    },
    "smart_save_amount": {
    "currency": "USD",
    "value": 15
    },
    "investee": {
    "user_reference": "e40d6109-8371-4c86-a2ef-239e01866810"
    },
    "status": "ACTIVE|INACTIVE|COMPLETED|CANCELLED"
    }
    ]
}