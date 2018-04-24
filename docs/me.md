Me
===
An object which contains the details of the admin or agent using the app. The object contains the following properties:

```js
    {
        id: number,
        primary_email: string,
        first_name: string,
        last_name: string,
        name: string,
        display_name: string,
        is_agent: bool,
        avatar: object,
        online: bool,
        last_seen: string,
        agent_data: object,
        picture_blob: string,
        disable_picture: bool,
        gravatar_url: string,
        is_contact: bool,
        is_user: bool,
        was_agent: bool,
        can_agent: bool,
        can_admin: bool,
        can_billing: bool,
        disable_autoresponses: bool,
        disable_autoresponses_log: string,
        is_confirmed: bool,
        is_deleted: bool,
        is_disabled: bool,
        creation_system: string,
        override_display_name: string,
        summary: string,
        language: number,
        organization: string,
        organization_position: string,
        organization_manager: string,
        timezone: string,
        date_created: string,
        date_last_login: string,
        browser: string,
        user_groups: array,
        agent_groups: array,
        labels: array,
        emails: array,
        phone_numbers: array,
        tickets_count: number,
        chats_count: number,
        fields: object,
        contact_data: array,
        teams: array,
        primary_team: string
    }
```

## Example Data

```json
    {
      "id":1,
      "primary_email":"sean@example.net",
      "first_name":"Sean",
      "last_name":"",
      "name":"Sean",
      "display_name":"Sean",
      "is_agent":true,
      "avatar":{
         "default_url_pattern":"https://example.net/file.php/avatar/{{IMG_SIZE}}/default.jpg?size-fit=1",
          "url_pattern":null,
          "base_gravatar_url":null
      },
      "online":true,
      "last_seen":"2017-11-15T18:51:52+0000",
      "agent_data":null,
      "picture_blob":null,
      "disable_picture":false,
      "gravatar_url":"http://www.gravatar.com/avatar/e95b3ce3151c88360b923c7be8f0c22c?&d=mm",
      "is_contact":false,
      "is_user":true,
      "was_agent":false,
      "can_agent":true,
      "can_admin":true,
      "can_billing":true,
      "disable_autoresponses":false,
      "disable_autoresponses_log":"",
      "is_confirmed":true,
      "is_deleted":false,
      "is_disabled":false,
      "creation_system":"web.person",
      "override_display_name":"",
      "summary":"",
      "language":1,
      "organization":null,
      "organization_position":"",
      "organization_manager":false,
      "timezone":"Europe/London",
      "date_created":"2017-11-08T12:48:12+0000",
      "date_last_login":"2017-11-08T20:09:48+0000",
      "browser":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36",
      "user_groups": [],
      "agent_groups":[3],
      "labels":[
        "donnelly-o'keefe"
      ],
      "emails":[
        "sean@example.net"
      ],
      "phone_numbers":[],
      "tickets_count":69,
      "chats_count":0,
      "fields":{},
      "contact_data":[],
      "teams":[],
      "primary_team":null
  }
```
