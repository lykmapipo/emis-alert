define({ "api": [
  {
    "type": "delete",
    "url": "/alerts/:id",
    "title": "Delete Existing Alert",
    "version": "1.0.0",
    "name": "DeleteAlert",
    "group": "Alert",
    "description": "<p>Delete existing alert</p>",
    "filename": "lib/alert.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-alert.herokuapp.com/v1/alerts/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique alert identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "source",
            "description": "<p>A party(or source or authority etc) issuing alert(or warning or notification).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "event",
            "description": "<p>Denoting type of the subject of the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "message",
            "description": "<p>Denoting message of the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "area",
            "description": "<p>Delineation of area(s) that may be affected by the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "resource",
            "description": "<p>Additional file with supplemental information related to alert message e.g. an image or audio file.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "reportedAt",
            "description": "<p>Date and time the alert was issued(or generated) by the alert source(or generator) e.g 2018-07-28 23:53:19 etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "expectedAt",
            "description": "<p>The expected time of the beginning of the subject event of the alert message e.g 2018-02-01T16:49:00</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "expiredAt",
            "description": "<p>The expiry time of the information of the alert message e.g 2018-03-03T11:19:00</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "occuredAt",
            "description": "<p>The effective time of the information of the alert message e.g e.g 2018-02-01T15:19:00</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "endedAt",
            "description": "<p>The effective date and time when alert occurance ended e.g 2018-02-01T15:19:00</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "direction",
            "defaultValue": "Inbound",
            "description": "<p>Human readable direction(received or given) of the alert i.e Inbound or Outbound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when alert was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when alert was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   _id: \"5bb25b91265be953c92f1521\",\n   source:\n   {\n       name: \"Nicolas - Gulgowski\",\n       phone: \"509.465.8501\",\n       email: \"phoebe_borer26@yahoo.com\",\n       website: \"https://waylon.com\"\n   },\n   event:\n   {\n       code: \"de2ed472-b3c5-44da-902d-51e96fc6e7ad\",\n       name: \"Sit sit nisi earum maiores commodi voluptatum illum.\",\n       category: \"Safety\",\n       description: \"Et et doloremque iusto nihil eos nam in consequatur.\",\n       urgency: \"Past\",\n       severity: \"Moderate\",\n       certainty: \"Unlikely\",\n       response: \"Shelter\"\n   },\n   message:\n   {\n       status: \"System\",\n       type: \"Ask\",\n       scope: \"Restricted\",\n       restriction: \"Necessitatibus est quod.\",\n       addresses: [\"mervin16@yahoo.com\"],\n       code: \"azure\",\n       note: \"Pariatur repellat dignissimos quas.\",\n       headline: \"Ipsa animi impedit officia.\",\n       instruction: \"Perspiciatis repudiandae doloribus.\",\n       website: \"http://ashly.net\"\n   },\n   area:\n   {\n       description: \"Borders\",\n       geometry:\n       {\n           type: \"Polygon\",\n           coordinates: [\n               [\n                   [44.184551651362, -1.6081961004244478],\n                   [41.21125601611241, -8.010221783743527],\n                   [37.854639889998076, -7.8464285284416935],\n                   [36.51791603953068, -11.054968936423933],\n                   [33.01453708697774, -15.497233831943916],\n                   [32.784868513491695, -13.29610438543305],\n                   [35.67894312439057, -7.63634997688592],\n                   [30.492728316323237, -8.692066624888076],\n                   [31.689532286539443, -2.864154032119321],\n                   [37.13965577600533, -5.922104559306792],\n                   [44.184551651362, -1.6081961004244478]\n               ]\n           ]\n       },\n       altitude: 3263313890770944,\n       ceiling: 2341686824927232\n   },\n   resources: [\n   {\n       description: \"Exercitationem nobis\",\n       mime: \"audio/evrc1\",\n       uri: \"https://s3.amazonaws.com/uifaces/faces/twitter/falvarad/128.jpg\"\n   }],\n   reportedAt: \"2018-09-05T06:51:49.629Z\",\n   expectedAt: \"2018-09-06T23:38:11.062Z\",\n   expiredAt: \"2018-09-29T09:45:30.790Z\",\n   occuredAt: \"2018-08-30T20:52:56.029Z\",\n   endedAt: \"2018-09-08T07:18:46.205Z\",\n   direction: \"Inbound\",\n   updatedAt: \"2018-10-01T17:38:26.066Z\",\n   createdAt: \"2018-10-01T17:38:26.066Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/alerts/:id",
    "title": "Get Existing Alert",
    "version": "1.0.0",
    "name": "GetAlert",
    "group": "Alert",
    "description": "<p>Get existing alert</p>",
    "filename": "lib/alert.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-alert.herokuapp.com/v1/alerts/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique alert identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "source",
            "description": "<p>A party(or source or authority etc) issuing alert(or warning or notification).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "event",
            "description": "<p>Denoting type of the subject of the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "message",
            "description": "<p>Denoting message of the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "area",
            "description": "<p>Delineation of area(s) that may be affected by the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "resource",
            "description": "<p>Additional file with supplemental information related to alert message e.g. an image or audio file.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "reportedAt",
            "description": "<p>Date and time the alert was issued(or generated) by the alert source(or generator) e.g 2018-07-28 23:53:19 etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "expectedAt",
            "description": "<p>The expected time of the beginning of the subject event of the alert message e.g 2018-02-01T16:49:00</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "expiredAt",
            "description": "<p>The expiry time of the information of the alert message e.g 2018-03-03T11:19:00</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "occuredAt",
            "description": "<p>The effective time of the information of the alert message e.g e.g 2018-02-01T15:19:00</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "endedAt",
            "description": "<p>The effective date and time when alert occurance ended e.g 2018-02-01T15:19:00</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "direction",
            "defaultValue": "Inbound",
            "description": "<p>Human readable direction(received or given) of the alert i.e Inbound or Outbound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when alert was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when alert was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   _id: \"5bb25b91265be953c92f1521\",\n   source:\n   {\n       name: \"Nicolas - Gulgowski\",\n       phone: \"509.465.8501\",\n       email: \"phoebe_borer26@yahoo.com\",\n       website: \"https://waylon.com\"\n   },\n   event:\n   {\n       code: \"de2ed472-b3c5-44da-902d-51e96fc6e7ad\",\n       name: \"Sit sit nisi earum maiores commodi voluptatum illum.\",\n       category: \"Safety\",\n       description: \"Et et doloremque iusto nihil eos nam in consequatur.\",\n       urgency: \"Past\",\n       severity: \"Moderate\",\n       certainty: \"Unlikely\",\n       response: \"Shelter\"\n   },\n   message:\n   {\n       status: \"System\",\n       type: \"Ask\",\n       scope: \"Restricted\",\n       restriction: \"Necessitatibus est quod.\",\n       addresses: [\"mervin16@yahoo.com\"],\n       code: \"azure\",\n       note: \"Pariatur repellat dignissimos quas.\",\n       headline: \"Ipsa animi impedit officia.\",\n       instruction: \"Perspiciatis repudiandae doloribus.\",\n       website: \"http://ashly.net\"\n   },\n   area:\n   {\n       description: \"Borders\",\n       geometry:\n       {\n           type: \"Polygon\",\n           coordinates: [\n               [\n                   [44.184551651362, -1.6081961004244478],\n                   [41.21125601611241, -8.010221783743527],\n                   [37.854639889998076, -7.8464285284416935],\n                   [36.51791603953068, -11.054968936423933],\n                   [33.01453708697774, -15.497233831943916],\n                   [32.784868513491695, -13.29610438543305],\n                   [35.67894312439057, -7.63634997688592],\n                   [30.492728316323237, -8.692066624888076],\n                   [31.689532286539443, -2.864154032119321],\n                   [37.13965577600533, -5.922104559306792],\n                   [44.184551651362, -1.6081961004244478]\n               ]\n           ]\n       },\n       altitude: 3263313890770944,\n       ceiling: 2341686824927232\n   },\n   resources: [\n   {\n       description: \"Exercitationem nobis\",\n       mime: \"audio/evrc1\",\n       uri: \"https://s3.amazonaws.com/uifaces/faces/twitter/falvarad/128.jpg\"\n   }],\n   reportedAt: \"2018-09-05T06:51:49.629Z\",\n   expectedAt: \"2018-09-06T23:38:11.062Z\",\n   expiredAt: \"2018-09-29T09:45:30.790Z\",\n   occuredAt: \"2018-08-30T20:52:56.029Z\",\n   endedAt: \"2018-09-08T07:18:46.205Z\",\n   direction: \"Inbound\",\n   updatedAt: \"2018-10-01T17:38:26.066Z\",\n   createdAt: \"2018-10-01T17:38:26.066Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/alerts",
    "title": "List Alerts",
    "version": "1.0.0",
    "name": "GetAlerts",
    "group": "Alert",
    "description": "<p>Returns a list of alerts</p>",
    "filename": "lib/alert.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-alert.herokuapp.com/v1/alerts"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of alerts</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique alert identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.source",
            "description": "<p>A party(or source or authority etc) issuing alert(or warning or notification).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.event",
            "description": "<p>Denoting type of the subject of the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.message",
            "description": "<p>Denoting message of the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.area",
            "description": "<p>Delineation of area(s) that may be affected by the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "data.resource",
            "description": "<p>Additional file with supplemental information related to alert message e.g. an image or audio file.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.reportedAt",
            "description": "<p>Date and time the alert was issued(or generated) by the alert source(or generator) e.g 2018-07-28 23:53:19 etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "data.expectedAt",
            "description": "<p>The expected time of the beginning of the subject event of the alert message e.g 2018-02-01T16:49:00</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.expiredAt",
            "description": "<p>The expiry time of the information of the alert message e.g 2018-03-03T11:19:00</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.occuredAt",
            "description": "<p>The effective time of the information of the alert message e.g e.g 2018-02-01T15:19:00</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "data.endedAt",
            "description": "<p>The effective date and time when alert occurance ended e.g 2018-02-01T15:19:00</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.direction",
            "defaultValue": "Inbound",
            "description": "<p>Human readable direction(received or given) of the alert i.e Inbound or Outbound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date when alert was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date when alert was last updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of alert</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of alert returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest alert was last modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\ndata:[\n {\n   _id: \"5bb25b91265be953c92f1521\",\n   source:\n   {\n       name: \"Nicolas - Gulgowski\",\n       phone: \"509.465.8501\",\n       email: \"phoebe_borer26@yahoo.com\",\n       website: \"https://waylon.com\"\n   },\n   event:\n   {\n       code: \"de2ed472-b3c5-44da-902d-51e96fc6e7ad\",\n       name: \"Sit sit nisi earum maiores commodi voluptatum illum.\",\n       category: \"Safety\",\n       description: \"Et et doloremque iusto nihil eos nam in consequatur.\",\n       urgency: \"Past\",\n       severity: \"Moderate\",\n       certainty: \"Unlikely\",\n       response: \"Shelter\"\n   },\n   message:\n   {\n       status: \"System\",\n       type: \"Ask\",\n       scope: \"Restricted\",\n       restriction: \"Necessitatibus est quod.\",\n       addresses: [\"mervin16@yahoo.com\"],\n       code: \"azure\",\n       note: \"Pariatur repellat dignissimos quas.\",\n       headline: \"Ipsa animi impedit officia.\",\n       instruction: \"Perspiciatis repudiandae doloribus.\",\n       website: \"http://ashly.net\"\n   },\n   area:\n   {\n       description: \"Borders\",\n       geometry:\n       {\n           type: \"Polygon\",\n           coordinates: [\n               [\n                   [44.184551651362, -1.6081961004244478],\n                   [41.21125601611241, -8.010221783743527],\n                   [37.854639889998076, -7.8464285284416935],\n                   [36.51791603953068, -11.054968936423933],\n                   [33.01453708697774, -15.497233831943916],\n                   [32.784868513491695, -13.29610438543305],\n                   [35.67894312439057, -7.63634997688592],\n                   [30.492728316323237, -8.692066624888076],\n                   [31.689532286539443, -2.864154032119321],\n                   [37.13965577600533, -5.922104559306792],\n                   [44.184551651362, -1.6081961004244478]\n               ]\n           ]\n       },\n       altitude: 3263313890770944,\n       ceiling: 2341686824927232\n   },\n   resources: [\n   {\n       description: \"Exercitationem nobis\",\n       mime: \"audio/evrc1\",\n       uri: \"https://s3.amazonaws.com/uifaces/faces/twitter/falvarad/128.jpg\"\n   }],\n   reportedAt: \"2018-09-05T06:51:49.629Z\",\n   expectedAt: \"2018-09-06T23:38:11.062Z\",\n   expiredAt: \"2018-09-29T09:45:30.790Z\",\n   occuredAt: \"2018-08-30T20:52:56.029Z\",\n   endedAt: \"2018-09-08T07:18:46.205Z\",\n   direction: \"Inbound\",\n   updatedAt: \"2018-10-01T17:38:26.066Z\",\n   createdAt: \"2018-10-01T17:38:26.066Z\"\n }\n],\ntotal: 10,\nsize: 2,\nlimit: 2,\nskip: 0,\npage: 1,\npages: 5,\nlastModified: \"2018-05-06T10:19:04.910Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/alerts/:id",
    "title": "Patch Existing Alert",
    "version": "1.0.0",
    "name": "PatchAlert",
    "group": "Alert",
    "description": "<p>Patch existing alert</p>",
    "filename": "lib/alert.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-alert.herokuapp.com/v1/alerts/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique alert identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "source",
            "description": "<p>A party(or source or authority etc) issuing alert(or warning or notification).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "event",
            "description": "<p>Denoting type of the subject of the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "message",
            "description": "<p>Denoting message of the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "area",
            "description": "<p>Delineation of area(s) that may be affected by the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "resource",
            "description": "<p>Additional file with supplemental information related to alert message e.g. an image or audio file.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "reportedAt",
            "description": "<p>Date and time the alert was issued(or generated) by the alert source(or generator) e.g 2018-07-28 23:53:19 etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "expectedAt",
            "description": "<p>The expected time of the beginning of the subject event of the alert message e.g 2018-02-01T16:49:00</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "expiredAt",
            "description": "<p>The expiry time of the information of the alert message e.g 2018-03-03T11:19:00</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "occuredAt",
            "description": "<p>The effective time of the information of the alert message e.g e.g 2018-02-01T15:19:00</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "endedAt",
            "description": "<p>The effective date and time when alert occurance ended e.g 2018-02-01T15:19:00</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "direction",
            "defaultValue": "Inbound",
            "description": "<p>Human readable direction(received or given) of the alert i.e Inbound or Outbound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when alert was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when alert was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   _id: \"5bb25b91265be953c92f1521\",\n   source:\n   {\n       name: \"Nicolas - Gulgowski\",\n       phone: \"509.465.8501\",\n       email: \"phoebe_borer26@yahoo.com\",\n       website: \"https://waylon.com\"\n   },\n   event:\n   {\n       code: \"de2ed472-b3c5-44da-902d-51e96fc6e7ad\",\n       name: \"Sit sit nisi earum maiores commodi voluptatum illum.\",\n       category: \"Safety\",\n       description: \"Et et doloremque iusto nihil eos nam in consequatur.\",\n       urgency: \"Past\",\n       severity: \"Moderate\",\n       certainty: \"Unlikely\",\n       response: \"Shelter\"\n   },\n   message:\n   {\n       status: \"System\",\n       type: \"Ask\",\n       scope: \"Restricted\",\n       restriction: \"Necessitatibus est quod.\",\n       addresses: [\"mervin16@yahoo.com\"],\n       code: \"azure\",\n       note: \"Pariatur repellat dignissimos quas.\",\n       headline: \"Ipsa animi impedit officia.\",\n       instruction: \"Perspiciatis repudiandae doloribus.\",\n       website: \"http://ashly.net\"\n   },\n   area:\n   {\n       description: \"Borders\",\n       geometry:\n       {\n           type: \"Polygon\",\n           coordinates: [\n               [\n                   [44.184551651362, -1.6081961004244478],\n                   [41.21125601611241, -8.010221783743527],\n                   [37.854639889998076, -7.8464285284416935],\n                   [36.51791603953068, -11.054968936423933],\n                   [33.01453708697774, -15.497233831943916],\n                   [32.784868513491695, -13.29610438543305],\n                   [35.67894312439057, -7.63634997688592],\n                   [30.492728316323237, -8.692066624888076],\n                   [31.689532286539443, -2.864154032119321],\n                   [37.13965577600533, -5.922104559306792],\n                   [44.184551651362, -1.6081961004244478]\n               ]\n           ]\n       },\n       altitude: 3263313890770944,\n       ceiling: 2341686824927232\n   },\n   resources: [\n   {\n       description: \"Exercitationem nobis\",\n       mime: \"audio/evrc1\",\n       uri: \"https://s3.amazonaws.com/uifaces/faces/twitter/falvarad/128.jpg\"\n   }],\n   reportedAt: \"2018-09-05T06:51:49.629Z\",\n   expectedAt: \"2018-09-06T23:38:11.062Z\",\n   expiredAt: \"2018-09-29T09:45:30.790Z\",\n   occuredAt: \"2018-08-30T20:52:56.029Z\",\n   endedAt: \"2018-09-08T07:18:46.205Z\",\n   direction: \"Inbound\",\n   updatedAt: \"2018-10-01T17:38:26.066Z\",\n   createdAt: \"2018-10-01T17:38:26.066Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/alerts",
    "title": "Create New Alert",
    "version": "1.0.0",
    "name": "PostAlert",
    "group": "Alert",
    "description": "<p>Create new alert</p>",
    "filename": "lib/alert.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-alert.herokuapp.com/v1/alerts"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique alert identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "source",
            "description": "<p>A party(or source or authority etc) issuing alert(or warning or notification).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "event",
            "description": "<p>Denoting type of the subject of the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "message",
            "description": "<p>Denoting message of the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "area",
            "description": "<p>Delineation of area(s) that may be affected by the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "resource",
            "description": "<p>Additional file with supplemental information related to alert message e.g. an image or audio file.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "reportedAt",
            "description": "<p>Date and time the alert was issued(or generated) by the alert source(or generator) e.g 2018-07-28 23:53:19 etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "expectedAt",
            "description": "<p>The expected time of the beginning of the subject event of the alert message e.g 2018-02-01T16:49:00</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "expiredAt",
            "description": "<p>The expiry time of the information of the alert message e.g 2018-03-03T11:19:00</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "occuredAt",
            "description": "<p>The effective time of the information of the alert message e.g e.g 2018-02-01T15:19:00</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "endedAt",
            "description": "<p>The effective date and time when alert occurance ended e.g 2018-02-01T15:19:00</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "direction",
            "defaultValue": "Inbound",
            "description": "<p>Human readable direction(received or given) of the alert i.e Inbound or Outbound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when alert was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when alert was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   _id: \"5bb25b91265be953c92f1521\",\n   source:\n   {\n       name: \"Nicolas - Gulgowski\",\n       phone: \"509.465.8501\",\n       email: \"phoebe_borer26@yahoo.com\",\n       website: \"https://waylon.com\"\n   },\n   event:\n   {\n       code: \"de2ed472-b3c5-44da-902d-51e96fc6e7ad\",\n       name: \"Sit sit nisi earum maiores commodi voluptatum illum.\",\n       category: \"Safety\",\n       description: \"Et et doloremque iusto nihil eos nam in consequatur.\",\n       urgency: \"Past\",\n       severity: \"Moderate\",\n       certainty: \"Unlikely\",\n       response: \"Shelter\"\n   },\n   message:\n   {\n       status: \"System\",\n       type: \"Ask\",\n       scope: \"Restricted\",\n       restriction: \"Necessitatibus est quod.\",\n       addresses: [\"mervin16@yahoo.com\"],\n       code: \"azure\",\n       note: \"Pariatur repellat dignissimos quas.\",\n       headline: \"Ipsa animi impedit officia.\",\n       instruction: \"Perspiciatis repudiandae doloribus.\",\n       website: \"http://ashly.net\"\n   },\n   area:\n   {\n       description: \"Borders\",\n       geometry:\n       {\n           type: \"Polygon\",\n           coordinates: [\n               [\n                   [44.184551651362, -1.6081961004244478],\n                   [41.21125601611241, -8.010221783743527],\n                   [37.854639889998076, -7.8464285284416935],\n                   [36.51791603953068, -11.054968936423933],\n                   [33.01453708697774, -15.497233831943916],\n                   [32.784868513491695, -13.29610438543305],\n                   [35.67894312439057, -7.63634997688592],\n                   [30.492728316323237, -8.692066624888076],\n                   [31.689532286539443, -2.864154032119321],\n                   [37.13965577600533, -5.922104559306792],\n                   [44.184551651362, -1.6081961004244478]\n               ]\n           ]\n       },\n       altitude: 3263313890770944,\n       ceiling: 2341686824927232\n   },\n   resources: [\n   {\n       description: \"Exercitationem nobis\",\n       mime: \"audio/evrc1\",\n       uri: \"https://s3.amazonaws.com/uifaces/faces/twitter/falvarad/128.jpg\"\n   }],\n   reportedAt: \"2018-09-05T06:51:49.629Z\",\n   expectedAt: \"2018-09-06T23:38:11.062Z\",\n   expiredAt: \"2018-09-29T09:45:30.790Z\",\n   occuredAt: \"2018-08-30T20:52:56.029Z\",\n   endedAt: \"2018-09-08T07:18:46.205Z\",\n   direction: \"Inbound\",\n   updatedAt: \"2018-10-01T17:38:26.066Z\",\n   createdAt: \"2018-10-01T17:38:26.066Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/alerts/:id",
    "title": "Put Existing Alert",
    "version": "1.0.0",
    "name": "PutAlert",
    "group": "Alert",
    "description": "<p>Put existing alert</p>",
    "filename": "lib/alert.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-alert.herokuapp.com/v1/alerts/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique alert identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "source",
            "description": "<p>A party(or source or authority etc) issuing alert(or warning or notification).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "event",
            "description": "<p>Denoting type of the subject of the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "message",
            "description": "<p>Denoting message of the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "area",
            "description": "<p>Delineation of area(s) that may be affected by the alert.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "resource",
            "description": "<p>Additional file with supplemental information related to alert message e.g. an image or audio file.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "reportedAt",
            "description": "<p>Date and time the alert was issued(or generated) by the alert source(or generator) e.g 2018-07-28 23:53:19 etc.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "expectedAt",
            "description": "<p>The expected time of the beginning of the subject event of the alert message e.g 2018-02-01T16:49:00</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "expiredAt",
            "description": "<p>The expiry time of the information of the alert message e.g 2018-03-03T11:19:00</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "occuredAt",
            "description": "<p>The effective time of the information of the alert message e.g e.g 2018-02-01T15:19:00</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "endedAt",
            "description": "<p>The effective date and time when alert occurance ended e.g 2018-02-01T15:19:00</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "direction",
            "defaultValue": "Inbound",
            "description": "<p>Human readable direction(received or given) of the alert i.e Inbound or Outbound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when alert was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when alert was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   _id: \"5bb25b91265be953c92f1521\",\n   source:\n   {\n       name: \"Nicolas - Gulgowski\",\n       phone: \"509.465.8501\",\n       email: \"phoebe_borer26@yahoo.com\",\n       website: \"https://waylon.com\"\n   },\n   event:\n   {\n       code: \"de2ed472-b3c5-44da-902d-51e96fc6e7ad\",\n       name: \"Sit sit nisi earum maiores commodi voluptatum illum.\",\n       category: \"Safety\",\n       description: \"Et et doloremque iusto nihil eos nam in consequatur.\",\n       urgency: \"Past\",\n       severity: \"Moderate\",\n       certainty: \"Unlikely\",\n       response: \"Shelter\"\n   },\n   message:\n   {\n       status: \"System\",\n       type: \"Ask\",\n       scope: \"Restricted\",\n       restriction: \"Necessitatibus est quod.\",\n       addresses: [\"mervin16@yahoo.com\"],\n       code: \"azure\",\n       note: \"Pariatur repellat dignissimos quas.\",\n       headline: \"Ipsa animi impedit officia.\",\n       instruction: \"Perspiciatis repudiandae doloribus.\",\n       website: \"http://ashly.net\"\n   },\n   area:\n   {\n       description: \"Borders\",\n       geometry:\n       {\n           type: \"Polygon\",\n           coordinates: [\n               [\n                   [44.184551651362, -1.6081961004244478],\n                   [41.21125601611241, -8.010221783743527],\n                   [37.854639889998076, -7.8464285284416935],\n                   [36.51791603953068, -11.054968936423933],\n                   [33.01453708697774, -15.497233831943916],\n                   [32.784868513491695, -13.29610438543305],\n                   [35.67894312439057, -7.63634997688592],\n                   [30.492728316323237, -8.692066624888076],\n                   [31.689532286539443, -2.864154032119321],\n                   [37.13965577600533, -5.922104559306792],\n                   [44.184551651362, -1.6081961004244478]\n               ]\n           ]\n       },\n       altitude: 3263313890770944,\n       ceiling: 2341686824927232\n   },\n   resources: [\n   {\n       description: \"Exercitationem nobis\",\n       mime: \"audio/evrc1\",\n       uri: \"https://s3.amazonaws.com/uifaces/faces/twitter/falvarad/128.jpg\"\n   }],\n   reportedAt: \"2018-09-05T06:51:49.629Z\",\n   expectedAt: \"2018-09-06T23:38:11.062Z\",\n   expiredAt: \"2018-09-29T09:45:30.790Z\",\n   occuredAt: \"2018-08-30T20:52:56.029Z\",\n   endedAt: \"2018-09-08T07:18:46.205Z\",\n   direction: \"Inbound\",\n   updatedAt: \"2018-10-01T17:38:26.066Z\",\n   createdAt: \"2018-10-01T17:38:26.066Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "description": "<p>Human readable, system specific code identifying the event type(incident type) of the alert e.g 2018090001, 20180001 etc.</p>",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/alert.event.schema.js",
    "group": "_home_lally_workspace_codetanzania_emis_alert_lib_alert_event_schema_js",
    "groupTitle": "_home_lally_workspace_codetanzania_emis_alert_lib_alert_event_schema_js",
    "name": ""
  }
] });
