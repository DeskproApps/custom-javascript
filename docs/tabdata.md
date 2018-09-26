TabData
=======
An object which contains the details of the currently opened ticket. The object contains the following properties:

```jsx harmony
{
  id: number,
  is_hold: bool,
  access_code: string,
  access_code_email_body_token: string,
  access_code_email_header_token: string,
  agent: object,
  attachments: array,
  auth: string,
  category: object,
  count_agent_replies: number,
  count_user_replies: number,
  current_user_waiting: number,
  current_user_waiting_work: number,
  custom_data: array,
  date_agent_waiting: string,
  date_agent_waiting_ts: number,
  date_agent_waiting_ts_ms: number,
  date_archived: string,
  date_archived_ts: number,
  date_archived_ts_ms: number,
  date_created: string,
  date_created_ts: number,
  date_created_ts_ms: number,
  date_feedback_rating_ts: number,
  date_feedback_rating_ts_ms: number,
  date_first_agent_assign: string,
  date_first_agent_assign_ts: number,
  date_first_agent_assign_ts_ms: number,
  date_first_agent_reply: string,
  date_first_agent_reply_ts: number,
  date_first_agent_reply_ts_ms: number,
  date_last_agent_reply: string,
  date_last_agent_reply_ts: number,
  date_last_agent_reply_ts_ms: number,
  date_last_user_reply: string,
  date_last_user_reply_ts: number,
  date_last_user_reply_ts_ms: number,
  date_locked: string,
  date_locked_ts: number,
  date_locked_ts_ms: number,
  date_on_hold: string,
  date_on_hold_ts: number,
  date_on_hold_ts_ms: number,
  date_resolved: string,
  date_resolved_ts: number,
  date_resolved_ts_ms: number,
  date_status: string,
  date_status_ts: number,
  date_status_ts_ms: number,
  date_user_waiting: string,
  date_user_waiting_ts: number,
  date_user_waiting_ts_ms: number,
  department: object,
  has_attachments: bool,
  hidden_status: string,
  labels: array,
  language: object,
  organization: object,
  original_subject: string,
  parent_ticket: string,
  participants: array,
  person: object,
  person_email: object,
  priority: string,
  product: object,
  ref: string,
  sent_to_address: string,
  status: string,
  subject: string,
  ticket_hash: string,
  ticket_slas: object,
  total_to_first_reply: number,
  total_to_first_reply_work: number,
  total_to_resolution: number,
  total_to_resolution_work: number,
  total_user_waiting: number,
  total_user_waiting_real: number,
  total_user_waiting_work: number,
  urgency: number,
  waiting_times: array,
  workflow: object,
  worst_sla_status: string
}
```

## Example Data

```json
{
  "id":163,
  "ref":"VJ88U1BXY3QLQSJ",
  "auth":"JHH87PNW68YY42H",
  "sent_to_address":"",
  "email_account_address":"",
  "creation_system":"",
  "creation_system_option":"",
  "ticket_hash":"ce3d6143056f37ff5c813ae27e354433e5518bc3",
  "status":"awaiting_agent",
  "hidden_status":null,
  "is_hold":false,
  "urgency":10,
  "count_agent_replies":0,
  "count_user_replies":0,
  "feedback_rating":null,
  "date_feedback_rating":null,
  "date_feedback_rating_ts":0,
  "date_feedback_rating_ts_ms":0,
  "date_created":"2017-02-13 15:51:57",
  "date_created_ts":1487001117,
  "date_created_ts_ms":1487001117000,
  "date_resolved":"2017-06-01 05:55:16",
  "date_resolved_ts":1496296516,
  "date_resolved_ts_ms":1496296516000,
  "date_archived":"2017-05-13 14:42:49",
  "date_archived_ts":1494686569,
  "date_archived_ts_ms":1494686569000,
  "date_first_agent_assign":"2017-02-18 05:24:19",
  "date_first_agent_assign_ts":1487395459,
  "date_first_agent_assign_ts_ms":1487395459000,
  "date_first_agent_reply":"2017-02-07 19:48:12",
  "date_first_agent_reply_ts":1486496892,
  "date_first_agent_reply_ts_ms":1486496892000,
  "date_last_agent_reply":"2017-01-08 22:19:57",
  "date_last_agent_reply_ts":1483913997,
  "date_last_agent_reply_ts_ms":1483913997000,
  "date_last_user_reply":"2016-12-15 23:41:03",
  "date_last_user_reply_ts":1481845263,
  "date_last_user_reply_ts_ms":1481845263000,
  "date_agent_waiting":"2017-11-04 00:00:42",
  "date_agent_waiting_ts":1509753642,
  "date_agent_waiting_ts_ms":1509753642000,
  "date_user_waiting":"2017-11-02 22:37:27",
  "date_user_waiting_ts":1509662247,
  "date_user_waiting_ts_ms":1509662247000,
  "date_status":"2017-03-15 11:20:00",
  "date_status_ts":1489576800,
  "date_status_ts_ms":1489576800000,
  "date_on_hold":null,
  "date_on_hold_ts":0,
  "date_on_hold_ts_ms":0,
  "total_user_waiting":0,
  "total_to_first_reply":0,
  "date_locked":null,
  "date_locked_ts":0,
  "date_locked_ts_ms":0,
  "has_attachments":false,
  "subject":"Qui omnis dignissimos nihil molestiae commodi.",
  "original_subject":"Qui omnis dignissimos nihil molestiae commodi.",
  "properties":null,
  "worst_sla_status":null,
  "waiting_times":[

  ],
  "parent_ticket":null,
  "language":{
    "id":6,
    "sys_name":"french",
    "lang_code":"fre",
    "title":"Français",
    "title_translated":[
      {
        "language_id":2,
        "language":"dev_blankout",
        "title":"████"
      },
      {
        "language_id":3,
        "language":"dev_longstring",
        "title":"Frenchmau-osl-asl-ove-nod"
      },
      {
        "language_id":4,
        "language":"dev_rtl",
        "title":"French"
      },
      {
        "language_id":1,
        "language":"default",
        "title":"French"
      },
      {
        "language_id":5,
        "language":"arabic",
        "title":"الفرنسية"
      }
    ],
    "base_filepath":"%DP_ROOT%/languages/french",
    "locale":"fr",
    "flag_image":"fr.png",
    "is_rtl":false,
    "has_user":true,
    "has_agent":true,
    "has_admin":false
  },
  "brand":{
    "id":1,
    "name":"Default",
    "url":null
  },
  "department":{
    "id":8,
    "title":"Control",
    "user_title":"",
    "is_tickets_enabled":true,
    "is_chat_enabled":false,
    "display_order":3,
    "brands":[
      1
    ],
    "title_full":"Regulation and Control of Magical Creatures > Control",
    "parent_id":6,
    "parent_ids":[
      6
    ],
    "title_parts":[
      "Regulation and Control of Magical Creatures",
      "Control"
    ],
    "user_title_parts":[
      "Regulation and Control of Magical Creatures",
      "Control"
    ],
    "has_children":false,
    "parent":{
      "id":6,
      "title":"Regulation and Control of Magical Creatures",
      "user_title":"",
      "is_tickets_enabled":true,
      "is_chat_enabled":false,
      "display_order":1,
      "brands":[

      ],
      "title_full":"Regulation and Control of Magical Creatures",
      "parent_id":null,
      "parent_ids":[

      ],
      "title_parts":[
        "Regulation and Control of Magical Creatures"
      ],
      "user_title_parts":[
        "Regulation and Control of Magical Creatures"
      ],
      "has_children":true
    }
  },
  "category":{
    "id":3,
    "title":"Ticket Category 3",
    "display_order":1,
    "parent_id":null
  },
  "priority":null,
  "workflow":{
    "id":4,
    "title":"Workflow 4",
    "display_order":1
  },
  "product":{
    "id":3,
    "title":"Product 3",
    "display_order":1,
    "depth":1,
    "root":null,
    "parent_id":null
  },
  "person":{
    "id":203,
    "gravatar_url":"https://secure.gravatar.com/avatar/446cfeca7588e208f123970db6045536?&d=mm",
    "disable_picture":false,
    "is_contact":false,
    "is_user":true,
    "is_agent":false,
    "was_agent":false,
    "can_agent":true,
    "can_admin":false,
    "can_billing":false,
    "can_reports":false,
    "is_vacation_mode":false,
    "disable_autoresponses":false,
    "disable_autoresponses_log":null,
    "is_confirmed":true,
    "is_deleted":false,
    "is_disabled":false,
    "importance":0,
    "creation_system":"api.dev.1510145293",
    "name":"Heather Stracke",
    "first_name":"Heather",
    "last_name":"Stracke",
    "title_prefix":"",
    "override_display_name":"",
    "summary":"",
    "organization_position":"",
    "organization_manager":false,
    "timezone":"America/Indiana/Petersburg",
    "date_created":"2016-11-25 06:17:11",
    "date_created_ts":1480054631,
    "date_created_ts_ms":1480054631000,
    "date_last_login":null,
    "date_last_login_ts":0,
    "date_last_login_ts_ms":0,
    "date_password_set":"2017-10-23 05:25:41",
    "date_password_set_ts":1508736341,
    "date_password_set_ts_ms":1508736341000,
    "date_picture_check":null,
    "date_picture_check_ts":0,
    "date_picture_check_ts_ms":0,
    "browser":null,
    "picture_blob":null,
    "organization":{
      "id":62,
      "name":"Hoeger PLC",
      "summary":"I am, sir,' said Alice; not that she did not much larger than a real nose; also its eyes by this time). 'Don't grunt,' said Alice; 'I might as well she might, what a long tail, certainly,' said Alice, who always took a minute or two. 'They couldn't have done just as I was thinking I should have liked teaching it tricks very much, if--if I'd only been the right size to do next, when suddenly a White Rabbit put on his slate with one eye; 'I seem to come once a week: HE taught us.",
      "importance":1,
      "date_created":"2017-04-05 01:49:21",
      "date_created_ts":1491356961,
      "date_created_ts_ms":1491356961000,
      "picture_url":"https://example.net/file.php/o-avatar/default?s=80&size-fit=1"
    },
    "emails":[
      {
        "id":203,
        "email":"mayer.jeramy@example.net"
      }
    ],
    "custom_data":[

    ],
    "contact_data":[

    ],
    "usergroups":[
      {
        "id":6,
        "title":"Extra Priv",
        "note":"Extra Priv: Occaecati suscipit sed consequuntur.",
        "is_agent_group":false,
        "sys_name":null,
        "is_enabled":true
      }
    ],
    "teams":[

    ],
    "primary_team":null,
    "labels":[
      "mohr ward and willms",
      "monahan gorczany and mayer",
      "stamm ltd"
    ],
    "organization_usergroups":[

    ],
    "display_name":"Heather Stracke",
    "primary_email":{
      "id":203,
      "email":"mayer.jeramy@example.net"
    },
    "primary_phone":[

    ],
    "phone_numbers":[

    ],
    "usergroup_ids":[
      6,
      2
    ],
    "agentgroup_ids":[

    ],
    "picture_url_80":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1",
    "default_picture_url_80":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1",
    "picture_url_64":"https://example.net/file.php/avatar/64/default.jpg?size-fit=1",
    "default_picture_url_64":"https://example.net/file.php/avatar/64/default.jpg?size-fit=1",
    "picture_url_50":"https://example.net/file.php/avatar/50/default.jpg?size-fit=1",
    "default_picture_url_50":"https://example.net/file.php/avatar/50/default.jpg?size-fit=1",
    "picture_url_45":"https://example.net/file.php/avatar/45/default.jpg?size-fit=1",
    "default_picture_url_45":"https://example.net/file.php/avatar/45/default.jpg?size-fit=1",
    "picture_url_32":"https://example.net/file.php/avatar/32/default.jpg?size-fit=1",
    "default_picture_url_32":"https://example.net/file.php/avatar/32/default.jpg?size-fit=1",
    "picture_url_22":"https://example.net/file.php/avatar/22/default.jpg?size-fit=1",
    "default_picture_url_22":"https://example.net/file.php/avatar/22/default.jpg?size-fit=1",
    "picture_url_16":"https://example.net/file.php/avatar/16/default.jpg?size-fit=1",
    "default_picture_url_16":"https://example.net/file.php/avatar/16/default.jpg?size-fit=1",
    "picture_url":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1",
    "default_picture_url":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1"
  },
  "person_email":{
    "id":203,
    "email":"mayer.jeramy@example.net",
    "email_domain":"example.net",
    "is_validated":true,
    "comment":"",
    "date_created":"2017-01-05 00:51:19",
    "date_created_ts":1483577479,
    "date_created_ts_ms":1483577479000,
    "date_validated":"2017-09-07 12:57:27",
    "date_validated_ts":1504789047,
    "date_validated_ts_ms":1504789047000
  },
  "agent":{
    "id":1,
    "gravatar_url":"https://secure.gravatar.com/avatar/e95b3c86151c88360b923c7be8f0c22c?&d=mm",
    "disable_picture":false,
    "is_contact":false,
    "is_user":true,
    "is_agent":true,
    "was_agent":false,
    "can_agent":true,
    "can_admin":true,
    "can_billing":true,
    "can_reports":true,
    "is_vacation_mode":false,
    "disable_autoresponses":false,
    "disable_autoresponses_log":"",
    "is_confirmed":true,
    "is_deleted":false,
    "is_disabled":false,
    "importance":0,
    "creation_system":"web.person",
    "name":"Sean",
    "first_name":"Sean",
    "last_name":"",
    "title_prefix":"",
    "override_display_name":"",
    "summary":"",
    "organization_position":"",
    "organization_manager":false,
    "timezone":"America/New_York",
    "date_created":"2017-11-08 12:48:12",
    "date_created_ts":1510145292,
    "date_created_ts_ms":1510145292000,
    "date_last_login":"2017-11-08 20:09:48",
    "date_last_login_ts":1510171788,
    "date_last_login_ts_ms":1510171788000,
    "date_password_set":"2017-11-08 12:48:48",
    "date_password_set_ts":1510145328,
    "date_password_set_ts_ms":1510145328000,
    "date_picture_check":null,
    "date_picture_check_ts":0,
    "date_picture_check_ts_ms":0,
    "browser":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36",
    "display_name":"Sean",
    "primary_email":{
      "id":1,
      "email":"sean@example.net"
    },
    "primary_phone":[

    ],
    "phone_numbers":[

    ],
    "emails":[
      {
        "id":1,
        "email":"sean@example.net"
      }
    ],
    "usergroup_ids":[
      2
    ],
    "agentgroup_ids":[
      3
    ],
    "picture_url_80":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1",
    "default_picture_url_80":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1",
    "picture_url_64":"https://example.net/file.php/avatar/64/default.jpg?size-fit=1",
    "default_picture_url_64":"https://example.net/file.php/avatar/64/default.jpg?size-fit=1",
    "picture_url_50":"https://example.net/file.php/avatar/50/default.jpg?size-fit=1",
    "default_picture_url_50":"https://example.net/file.php/avatar/50/default.jpg?size-fit=1",
    "picture_url_45":"https://example.net/file.php/avatar/45/default.jpg?size-fit=1",
    "default_picture_url_45":"https://example.net/file.php/avatar/45/default.jpg?size-fit=1",
    "picture_url_32":"https://example.net/file.php/avatar/32/default.jpg?size-fit=1",
    "default_picture_url_32":"https://example.net/file.php/avatar/32/default.jpg?size-fit=1",
    "picture_url_22":"https://example.net/file.php/avatar/22/default.jpg?size-fit=1",
    "default_picture_url_22":"https://example.net/file.php/avatar/22/default.jpg?size-fit=1",
    "picture_url_16":"https://example.net/file.php/avatar/16/default.jpg?size-fit=1",
    "default_picture_url_16":"https://example.net/file.php/avatar/16/default.jpg?size-fit=1",
    "picture_url":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1",
    "default_picture_url":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1",
    "display_name_real":"Sean"
  },
  "agent_team":null,
  "organization":{
    "id":62,
    "name":"Hoeger PLC",
    "summary":"I am, sir,' said Alice; not that she did not much larger than a real nose; also its eyes by this time). 'Don't grunt,' said Alice; 'I might as well she might, what a long tail, certainly,' said Alice, who always took a minute or two. 'They couldn't have done just as I was thinking I should have liked teaching it tricks very much, if--if I'd only been the right size to do next, when suddenly a White Rabbit put on his slate with one eye; 'I seem to come once a week: HE taught us.",
    "importance":1,
    "date_created":"2017-04-05 01:49:21",
    "date_created_ts":1491356961,
    "date_created_ts_ms":1491356961000,
    "picture_url":"https://example.net/file.php/o-avatar/default?s=80&size-fit=1"
  },
  "attachments":[

  ],
  "custom_data":[
    {
      "id":1859,
      "value":1,
      "input":"",
      "field":{
        "id":4,
        "js_class":"",
        "has_form_template":false,
        "has_display_template":false,
        "title":"I'd rather not say",
        "description":"",
        "handler_class":null,
        "options":[

        ],
        "is_user_enabled":true,
        "is_enabled":true,
        "display_order":4,
        "default_value":null,
        "is_agent_field":false,
        "type_name":""
      },
      "root_field":{
        "id":1,
        "js_class":"",
        "has_form_template":false,
        "has_display_template":false,
        "title":"Flumdiggler",
        "description":"A custom field",
        "handler_class":"Application\\DeskPRO\\CustomFields\\Handler\\Choice",
        "options":{
          "choices":[
            "Agree",
            "Disagree",
            "I'd rather not say"
          ]
        },
        "is_user_enabled":true,
        "is_enabled":true,
        "display_order":1,
        "default_value":4,
        "is_agent_field":false,
        "type_name":"choice",
        "choices":[
          {
            "id":2,
            "title":"Agree",
            "parent_id":null,
            "display_order":2,
            "disabled":false
          },
          {
            "id":3,
            "title":"Disagree",
            "parent_id":null,
            "display_order":3,
            "disabled":false
          },
          {
            "id":4,
            "title":"I'd rather not say",
            "parent_id":null,
            "display_order":4,
            "disabled":false
          }
        ]
      }
    },
    {
      "id":1860,
      "value":0,
      "input":"Alice. 'Why, you don't know of any that do,' Alice hastily.",
      "field":{
        "id":5,
        "js_class":"",
        "has_form_template":false,
        "has_display_template":false,
        "title":"Widget Type",
        "description":"A custom field",
        "handler_class":"Application\\DeskPRO\\CustomFields\\Handler\\Text",
        "options":{
          "default_value":"saepe"
        },
        "is_user_enabled":true,
        "is_enabled":true,
        "display_order":5,
        "default_value":"saepe",
        "is_agent_field":false,
        "type_name":"text"
      },
      "root_field":{
        "id":5,
        "js_class":"",
        "has_form_template":false,
        "has_display_template":false,
        "title":"Widget Type",
        "description":"A custom field",
        "handler_class":"Application\\DeskPRO\\CustomFields\\Handler\\Text",
        "options":{
          "default_value":"saepe"
        },
        "is_user_enabled":true,
        "is_enabled":true,
        "display_order":5,
        "default_value":"saepe",
        "is_agent_field":false,
        "type_name":"text"
      }
    },
    {
      "id":1861,
      "value":0,
      "input":"Off with his head!\"' 'How dreadfully savage!' exclaimed Alice. 'That's very curious!' she thought. 'I must go and get in at the stick, and held it out into the teapot. 'At any rate it would like the look of it at all; and I'm sure she's the best way to change the subject. 'Go on with the distant sobs of the house till she had somehow fallen into a line along the passage.",
      "field":{
        "id":6,
        "js_class":"",
        "has_form_template":false,
        "has_display_template":false,
        "title":"Widget Description",
        "description":"A custom field",
        "handler_class":"Application\\DeskPRO\\CustomFields\\Handler\\Textarea",
        "options":{
          "default_value":"Mollitia dolorem voluptatem rerum aperiam repellat id sed. Animi dolor ea est a voluptatum ut aut. Dolorem doloremque quo consectetur omnis consequatur dignissimos est. Ut qui omnis in ab deserunt."
        },
        "is_user_enabled":true,
        "is_enabled":true,
        "display_order":6,
        "default_value":"Mollitia dolorem voluptatem rerum aperiam repellat id sed. Animi dolor ea est a voluptatum ut aut. Dolorem doloremque quo consectetur omnis consequatur dignissimos est. Ut qui omnis in ab deserunt.",
        "is_agent_field":false,
        "type_name":"textarea"
      },
      "root_field":{
        "id":6,
        "js_class":"",
        "has_form_template":false,
        "has_display_template":false,
        "title":"Widget Description",
        "description":"A custom field",
        "handler_class":"Application\\DeskPRO\\CustomFields\\Handler\\Textarea",
        "options":{
          "default_value":"Mollitia dolorem voluptatem rerum aperiam repellat id sed. Animi dolor ea est a voluptatum ut aut. Dolorem doloremque quo consectetur omnis consequatur dignissimos est. Ut qui omnis in ab deserunt."
        },
        "is_user_enabled":true,
        "is_enabled":true,
        "display_order":6,
        "default_value":"Mollitia dolorem voluptatem rerum aperiam repellat id sed. Animi dolor ea est a voluptatum ut aut. Dolorem doloremque quo consectetur omnis consequatur dignissimos est. Ut qui omnis in ab deserunt.",
        "is_agent_field":false,
        "type_name":"textarea"
      }
    },
    {
      "id":1862,
      "value":1,
      "input":"",
      "field":{
        "id":9,
        "js_class":"",
        "has_form_template":false,
        "has_display_template":false,
        "title":"Medium",
        "description":"",
        "handler_class":null,
        "options":[

        ],
        "is_user_enabled":true,
        "is_enabled":true,
        "display_order":9,
        "default_value":null,
        "is_agent_field":false,
        "type_name":""
      },
      "root_field":{
        "id":7,
        "js_class":"",
        "has_form_template":false,
        "has_display_template":false,
        "title":"Desired Sizes",
        "description":"A custom field",
        "handler_class":"Application\\DeskPRO\\CustomFields\\Handler\\Choice",
        "options":{
          "choices":[
            "Small",
            "Medium",
            "Large"
          ],
          "multiple":1,
          "expanded":1
        },
        "is_user_enabled":true,
        "is_enabled":true,
        "display_order":7,
        "default_value":[
          10
        ],
        "is_agent_field":false,
        "type_name":"choice",
        "choices":[
          {
            "id":8,
            "title":"Small",
            "parent_id":null,
            "display_order":8,
            "disabled":false
          },
          {
            "id":9,
            "title":"Medium",
            "parent_id":null,
            "display_order":9,
            "disabled":false
          },
          {
            "id":10,
            "title":"Large",
            "parent_id":null,
            "display_order":10,
            "disabled":false
          }
        ]
      }
    },
    {
      "id":1863,
      "value":1510145303,
      "input":"",
      "field":{
        "id":11,
        "js_class":"",
        "has_form_template":false,
        "has_display_template":false,
        "title":"Manufacture Date",
        "description":"A custom field",
        "handler_class":"Application\\DeskPRO\\CustomFields\\Handler\\Date",
        "options":[

        ],
        "is_user_enabled":true,
        "is_enabled":true,
        "display_order":11,
        "default_value":null,
        "is_agent_field":false,
        "type_name":"date"
      },
      "root_field":{
        "id":11,
        "js_class":"",
        "has_form_template":false,
        "has_display_template":false,
        "title":"Manufacture Date",
        "description":"A custom field",
        "handler_class":"Application\\DeskPRO\\CustomFields\\Handler\\Date",
        "options":[

        ],
        "is_user_enabled":true,
        "is_enabled":true,
        "display_order":11,
        "default_value":null,
        "is_agent_field":false,
        "type_name":"date"
      }
    },
    {
      "id":1864,
      "value":1,
      "input":"",
      "field":{
        "id":13,
        "js_class":"",
        "has_form_template":false,
        "has_display_template":false,
        "title":"Nuisance",
        "description":"",
        "handler_class":null,
        "options":[

        ],
        "is_user_enabled":true,
        "is_enabled":true,
        "display_order":13,
        "default_value":null,
        "is_agent_field":false,
        "type_name":""
      },
      "root_field":{
        "id":12,
        "js_class":"",
        "has_form_template":false,
        "has_display_template":false,
        "title":"Reason for Complaint",
        "description":"A custom field",
        "handler_class":"Application\\DeskPRO\\CustomFields\\Handler\\Choice",
        "options":{
          "choices":[
            "Nuisance",
            "Dangerous",
            "Smelly",
            "Ugly",
            "Mean",
            "Other"
          ],
          "multiple":false,
          "expanded":1
        },
        "is_user_enabled":true,
        "is_enabled":true,
        "display_order":12,
        "default_value":18,
        "is_agent_field":false,
        "type_name":"choice",
        "choices":[
          {
            "id":13,
            "title":"Nuisance",
            "parent_id":null,
            "display_order":13,
            "disabled":false
          },
          {
            "id":14,
            "title":"Dangerous",
            "parent_id":null,
            "display_order":14,
            "disabled":false
          },
          {
            "id":15,
            "title":"Smelly",
            "parent_id":null,
            "display_order":15,
            "disabled":false
          },
          {
            "id":16,
            "title":"Ugly",
            "parent_id":null,
            "display_order":16,
            "disabled":false
          },
          {
            "id":17,
            "title":"Mean",
            "parent_id":null,
            "display_order":17,
            "disabled":false
          },
          {
            "id":18,
            "title":"Other",
            "parent_id":null,
            "display_order":18,
            "disabled":false
          }
        ]
      }
    },
    {
      "id":1865,
      "value":1,
      "input":"",
      "field":{
        "id":22,
        "js_class":"",
        "has_form_template":false,
        "has_display_template":false,
        "title":"Fire them off to the moon",
        "description":"",
        "handler_class":null,
        "options":[

        ],
        "is_user_enabled":true,
        "is_enabled":true,
        "display_order":22,
        "default_value":null,
        "is_agent_field":false,
        "type_name":""
      },
      "root_field":{
        "id":19,
        "js_class":"",
        "has_form_template":false,
        "has_display_template":false,
        "title":"Suggested Actions",
        "description":"A custom field",
        "handler_class":"Application\\DeskPRO\\CustomFields\\Handler\\Choice",
        "options":{
          "choices":[
            "Eviction",
            "Shun",
            "Fire them off to the moon",
            "Strongly worded letter"
          ],
          "multiple":1
        },
        "is_user_enabled":true,
        "is_enabled":true,
        "display_order":19,
        "default_value":[
          23
        ],
        "is_agent_field":false,
        "type_name":"choice",
        "choices":[
          {
            "id":20,
            "title":"Eviction",
            "parent_id":null,
            "display_order":20,
            "disabled":false
          },
          {
            "id":21,
            "title":"Shun",
            "parent_id":null,
            "display_order":21,
            "disabled":false
          },
          {
            "id":22,
            "title":"Fire them off to the moon",
            "parent_id":null,
            "display_order":22,
            "disabled":false
          },
          {
            "id":23,
            "title":"Strongly worded letter",
            "parent_id":null,
            "display_order":23,
            "disabled":false
          }
        ]
      }
    },
    {
      "id":1866,
      "value":1,
      "input":"",
      "field":{
        "id":27,
        "js_class":"",
        "has_form_template":false,
        "has_display_template":false,
        "title":"Bratwurst",
        "description":"",
        "handler_class":null,
        "options":[

        ],
        "is_user_enabled":true,
        "is_enabled":true,
        "display_order":27,
        "default_value":null,
        "is_agent_field":false,
        "type_name":""
      },
      "root_field":{
        "id":24,
        "js_class":"",
        "has_form_template":false,
        "has_display_template":false,
        "title":"Hotdog Kind",
        "description":"A custom field",
        "handler_class":"Application\\DeskPRO\\CustomFields\\Handler\\Choice",
        "options":{
          "choices":[
            "Normal",
            [
              "German",
              [
                "Bratwurst",
                "Extrawurst",
                [
                  "Frankfurter",
                  [
                    "Rindswurst",
                    "Würstchen"
                  ]
                ]
              ]
            ],
            "Large"
          ]
        },
        "is_user_enabled":true,
        "is_enabled":true,
        "display_order":24,
        "default_value":32,
        "is_agent_field":false,
        "type_name":"choice",
        "choices":[
          {
            "id":25,
            "title":"Normal",
            "parent_id":null,
            "display_order":25,
            "disabled":false
          },
          {
            "id":26,
            "title":"German",
            "parent_id":null,
            "display_order":26,
            "disabled":true
          },
          {
            "id":27,
            "title":"Bratwurst",
            "parent_id":null,
            "display_order":27,
            "disabled":false
          },
          {
            "id":28,
            "title":"Extrawurst",
            "parent_id":26,
            "display_order":28,
            "disabled":false
          },
          {
            "id":29,
            "title":"Frankfurter",
            "parent_id":26,
            "display_order":29,
            "disabled":true
          },
          {
            "id":30,
            "title":"Rindswurst",
            "parent_id":null,
            "display_order":30,
            "disabled":false
          },
          {
            "id":31,
            "title":"Würstchen",
            "parent_id":29,
            "display_order":31,
            "disabled":false
          },
          {
            "id":32,
            "title":"Large",
            "parent_id":null,
            "display_order":32,
            "disabled":false
          }
        ]
      }
    },
    {
      "id":1867,
      "value":1510145303,
      "input":"",
      "field":{
        "id":33,
        "js_class":"",
        "has_form_template":false,
        "has_display_template":false,
        "title":"Delivery Time",
        "description":"A custom field",
        "handler_class":"Application\\DeskPRO\\CustomFields\\Handler\\DateTime",
        "options":[

        ],
        "is_user_enabled":true,
        "is_enabled":true,
        "display_order":33,
        "default_value":null,
        "is_agent_field":false,
        "type_name":"datetime"
      },
      "root_field":{
        "id":33,
        "js_class":"",
        "has_form_template":false,
        "has_display_template":false,
        "title":"Delivery Time",
        "description":"A custom field",
        "handler_class":"Application\\DeskPRO\\CustomFields\\Handler\\DateTime",
        "options":[

        ],
        "is_user_enabled":true,
        "is_enabled":true,
        "display_order":33,
        "default_value":null,
        "is_agent_field":false,
        "type_name":"datetime"
      }
    }
  ],
  "email_account":null,
  "participants":[
    {
      "id":673,
      "default_on":false,
      "person":{
        "id":434,
        "gravatar_url":"https://secure.gravatar.com/avatar/9caeba4e8318efc65299330178f6927a?&d=mm",
        "disable_picture":false,
        "is_contact":false,
        "is_user":true,
        "is_agent":false,
        "was_agent":false,
        "can_agent":true,
        "can_admin":false,
        "can_billing":false,
        "can_reports":false,
        "is_vacation_mode":false,
        "disable_autoresponses":false,
        "disable_autoresponses_log":null,
        "is_confirmed":true,
        "is_deleted":false,
        "is_disabled":false,
        "importance":0,
        "creation_system":"api.dev.1510145293",
        "name":"Emerald Nader",
        "first_name":"Emerald",
        "last_name":"Nader",
        "title_prefix":"",
        "override_display_name":"",
        "summary":"",
        "organization_position":"",
        "organization_manager":false,
        "timezone":"America/Recife",
        "date_created":"2017-05-08 07:43:26",
        "date_created_ts":1494229406,
        "date_created_ts_ms":1494229406000,
        "date_last_login":null,
        "date_last_login_ts":0,
        "date_last_login_ts_ms":0,
        "date_password_set":"2017-11-08 04:53:21",
        "date_password_set_ts":1510116801,
        "date_password_set_ts_ms":1510116801000,
        "date_picture_check":null,
        "date_picture_check_ts":0,
        "date_picture_check_ts_ms":0,
        "browser":null,
        "organization_usergroups":[
          {
            "id":5,
            "title":"VIP",
            "note":"VIP: Nihil sit temporibus quia odit.",
            "is_agent_group":false,
            "sys_name":null,
            "is_enabled":true
          },
          {
            "id":6,
            "title":"Extra Priv",
            "note":"Extra Priv: Occaecati suscipit sed consequuntur.",
            "is_agent_group":false,
            "sys_name":null,
            "is_enabled":true
          },
          {
            "id":7,
            "title":"Beta Users",
            "note":"Beta Users: Voluptates numquam officiis eveniet qui mollitia similique.",
            "is_agent_group":false,
            "sys_name":null,
            "is_enabled":true
          }
        ],
        "organization":{
          "id":72,
          "name":"Swift, D'Amore and Wyman",
          "summary":"MORE than nothing.' 'Nobody asked YOUR opinion,' said Alice. 'Anything you like,' said the Duchess: 'flamingoes and mustard both bite. And the moral of that dark hall, and wander about among those beds of bright flowers and.",
          "importance":1,
          "date_created":"2016-12-10 06:49:55",
          "date_created_ts":1481352595,
          "date_created_ts_ms":1481352595000,
          "picture_url":"https://example.net/file.php/o-avatar/default?s=80&size-fit=1"
        },
        "display_name":"Emerald Nader",
        "primary_email":{
          "id":433,
          "email":"mueller.stanford@example.net"
        },
        "primary_phone":[

        ],
        "phone_numbers":[

        ],
        "emails":[
          {
            "id":433,
            "email":"mueller.stanford@example.net"
          }
        ],
        "usergroup_ids":[
          2
        ],
        "agentgroup_ids":[

        ],
        "picture_url_80":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1",
        "default_picture_url_80":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1",
        "picture_url_64":"https://example.net/file.php/avatar/64/default.jpg?size-fit=1",
        "default_picture_url_64":"https://example.net/file.php/avatar/64/default.jpg?size-fit=1",
        "picture_url_50":"https://example.net/file.php/avatar/50/default.jpg?size-fit=1",
        "default_picture_url_50":"https://example.net/file.php/avatar/50/default.jpg?size-fit=1",
        "picture_url_45":"https://example.net/file.php/avatar/45/default.jpg?size-fit=1",
        "default_picture_url_45":"https://example.net/file.php/avatar/45/default.jpg?size-fit=1",
        "picture_url_32":"https://example.net/file.php/avatar/32/default.jpg?size-fit=1",
        "default_picture_url_32":"https://example.net/file.php/avatar/32/default.jpg?size-fit=1",
        "picture_url_22":"https://example.net/file.php/avatar/22/default.jpg?size-fit=1",
        "default_picture_url_22":"https://example.net/file.php/avatar/22/default.jpg?size-fit=1",
        "picture_url_16":"https://example.net/file.php/avatar/16/default.jpg?size-fit=1",
        "default_picture_url_16":"https://example.net/file.php/avatar/16/default.jpg?size-fit=1",
        "picture_url":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1",
        "default_picture_url":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1"
      }
    },
    {
      "id":674,
      "default_on":false,
      "person":{
        "id":447,
        "gravatar_url":"https://secure.gravatar.com/avatar/b4a1ec2408463e7ab12cd35a76a48833?&d=mm",
        "disable_picture":false,
        "is_contact":false,
        "is_user":true,
        "is_agent":false,
        "was_agent":false,
        "can_agent":true,
        "can_admin":false,
        "can_billing":false,
        "can_reports":false,
        "is_vacation_mode":false,
        "disable_autoresponses":false,
        "disable_autoresponses_log":null,
        "is_confirmed":true,
        "is_deleted":false,
        "is_disabled":false,
        "importance":0,
        "creation_system":"api.dev.1510145293",
        "name":"Renee Ritchie",
        "first_name":"Renee",
        "last_name":"Ritchie",
        "title_prefix":"",
        "override_display_name":"",
        "summary":"",
        "organization_position":"",
        "organization_manager":false,
        "timezone":"Asia/Jayapura",
        "date_created":"2017-11-04 20:28:03",
        "date_created_ts":1509827283,
        "date_created_ts_ms":1509827283000,
        "date_last_login":null,
        "date_last_login_ts":0,
        "date_last_login_ts_ms":0,
        "date_password_set":"2017-10-30 15:21:36",
        "date_password_set_ts":1509376896,
        "date_password_set_ts_ms":1509376896000,
        "date_picture_check":null,
        "date_picture_check_ts":0,
        "date_picture_check_ts_ms":0,
        "browser":null,
        "organization_usergroups":[
          {
            "id":6,
            "title":"Extra Priv",
            "note":"Extra Priv: Occaecati suscipit sed consequuntur.",
            "is_agent_group":false,
            "sys_name":null,
            "is_enabled":true
          }
        ],
        "organization":{
          "id":39,
          "name":"Huels, Lubowitz and Walsh",
          "summary":"Alice, 'I've often seen them at last, and managed to swallow a morsel of the lefthand bit. * * * CHAPTER II. The Pool of Tears 'Curiouser and.",
          "importance":1,
          "date_created":"2017-10-22 06:20:03",
          "date_created_ts":1508653203,
          "date_created_ts_ms":1508653203000,
          "picture_url":"https://example.net/file.php/o-avatar/default?s=80&size-fit=1"
        },
        "display_name":"Renee Ritchie",
        "primary_email":{
          "id":446,
          "email":"qkunde@example.com"
        },
        "primary_phone":[

        ],
        "phone_numbers":[

        ],
        "emails":[
          {
            "id":446,
            "email":"qkunde@example.com"
          }
        ],
        "usergroup_ids":[
          5,
          2
        ],
        "agentgroup_ids":[

        ],
        "picture_url_80":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1",
        "default_picture_url_80":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1",
        "picture_url_64":"https://example.net/file.php/avatar/64/default.jpg?size-fit=1",
        "default_picture_url_64":"https://example.net/file.php/avatar/64/default.jpg?size-fit=1",
        "picture_url_50":"https://example.net/file.php/avatar/50/default.jpg?size-fit=1",
        "default_picture_url_50":"https://example.net/file.php/avatar/50/default.jpg?size-fit=1",
        "picture_url_45":"https://example.net/file.php/avatar/45/default.jpg?size-fit=1",
        "default_picture_url_45":"https://example.net/file.php/avatar/45/default.jpg?size-fit=1",
        "picture_url_32":"https://example.net/file.php/avatar/32/default.jpg?size-fit=1",
        "default_picture_url_32":"https://example.net/file.php/avatar/32/default.jpg?size-fit=1",
        "picture_url_22":"https://example.net/file.php/avatar/22/default.jpg?size-fit=1",
        "default_picture_url_22":"https://example.net/file.php/avatar/22/default.jpg?size-fit=1",
        "picture_url_16":"https://example.net/file.php/avatar/16/default.jpg?size-fit=1",
        "default_picture_url_16":"https://example.net/file.php/avatar/16/default.jpg?size-fit=1",
        "picture_url":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1",
        "default_picture_url":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1"
      }
    },
    {
      "id":675,
      "default_on":false,
      "person":{
        "id":238,
        "gravatar_url":"https://secure.gravatar.com/avatar/822fef0812ec0d1688c5e5899815526d?&d=mm",
        "disable_picture":false,
        "is_contact":false,
        "is_user":true,
        "is_agent":false,
        "was_agent":false,
        "can_agent":true,
        "can_admin":false,
        "can_billing":false,
        "can_reports":false,
        "is_vacation_mode":false,
        "disable_autoresponses":false,
        "disable_autoresponses_log":null,
        "is_confirmed":true,
        "is_deleted":false,
        "is_disabled":false,
        "importance":0,
        "creation_system":"api.dev.1510145293",
        "name":"Lolita Gaylord",
        "first_name":"Lolita",
        "last_name":"Gaylord",
        "title_prefix":"",
        "override_display_name":"",
        "summary":"",
        "organization_position":"",
        "organization_manager":false,
        "timezone":"Antarctica/Troll",
        "date_created":"2017-07-26 16:25:27",
        "date_created_ts":1501086327,
        "date_created_ts_ms":1501086327000,
        "date_last_login":null,
        "date_last_login_ts":0,
        "date_last_login_ts_ms":0,
        "date_password_set":"2017-10-21 13:27:06",
        "date_password_set_ts":1508592426,
        "date_password_set_ts_ms":1508592426000,
        "date_picture_check":null,
        "date_picture_check_ts":0,
        "date_picture_check_ts_ms":0,
        "browser":null,
        "organization_usergroups":[

        ],
        "organization":{
          "id":43,
          "name":"Hegmann, Hilll and Conn",
          "summary":"Queen to-day?' 'I should think you'll feel it a very poor speaker,' said the Duchess. 'I make you a song?'.",
          "importance":1,
          "date_created":"2017-03-15 17:51:28",
          "date_created_ts":1489600288,
          "date_created_ts_ms":1489600288000,
          "picture_url":"https://example.net/file.php/o-avatar/default?s=80&size-fit=1"
        },
        "display_name":"Lolita Gaylord",
        "primary_email":{
          "id":238,
          "email":"sharvey@example.com"
        },
        "primary_phone":[

        ],
        "phone_numbers":[

        ],
        "emails":[
          {
            "id":238,
            "email":"sharvey@example.com"
          }
        ],
        "usergroup_ids":[
          6,
          7,
          2
        ],
        "agentgroup_ids":[

        ],
        "picture_url_80":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1",
        "default_picture_url_80":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1",
        "picture_url_64":"https://example.net/file.php/avatar/64/default.jpg?size-fit=1",
        "default_picture_url_64":"https://example.net/file.php/avatar/64/default.jpg?size-fit=1",
        "picture_url_50":"https://example.net/file.php/avatar/50/default.jpg?size-fit=1",
        "default_picture_url_50":"https://example.net/file.php/avatar/50/default.jpg?size-fit=1",
        "picture_url_45":"https://example.net/file.php/avatar/45/default.jpg?size-fit=1",
        "default_picture_url_45":"https://example.net/file.php/avatar/45/default.jpg?size-fit=1",
        "picture_url_32":"https://example.net/file.php/avatar/32/default.jpg?size-fit=1",
        "default_picture_url_32":"https://example.net/file.php/avatar/32/default.jpg?size-fit=1",
        "picture_url_22":"https://example.net/file.php/avatar/22/default.jpg?size-fit=1",
        "default_picture_url_22":"https://example.net/file.php/avatar/22/default.jpg?size-fit=1",
        "picture_url_16":"https://example.net/file.php/avatar/16/default.jpg?size-fit=1",
        "default_picture_url_16":"https://example.net/file.php/avatar/16/default.jpg?size-fit=1",
        "picture_url":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1",
        "default_picture_url":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1"
      }
    },
    {
      "id":676,
      "default_on":false,
      "person":{
        "id":47,
        "gravatar_url":"https://secure.gravatar.com/avatar/61ead72cb0261f33acb85df7dfe14a53?&d=mm",
        "disable_picture":false,
        "is_contact":false,
        "is_user":true,
        "is_agent":false,
        "was_agent":false,
        "can_agent":true,
        "can_admin":false,
        "can_billing":false,
        "can_reports":false,
        "is_vacation_mode":false,
        "disable_autoresponses":false,
        "disable_autoresponses_log":null,
        "is_confirmed":true,
        "is_deleted":false,
        "is_disabled":false,
        "importance":0,
        "creation_system":"api.dev.1510145293",
        "name":"Efren Frami",
        "first_name":"Efren",
        "last_name":"Frami",
        "title_prefix":"",
        "override_display_name":"",
        "summary":"",
        "organization_position":"",
        "organization_manager":false,
        "timezone":"Europe/Berlin",
        "date_created":"2017-11-02 20:25:24",
        "date_created_ts":1509654324,
        "date_created_ts_ms":1509654324000,
        "date_last_login":null,
        "date_last_login_ts":0,
        "date_last_login_ts_ms":0,
        "date_password_set":"2017-10-18 12:23:55",
        "date_password_set_ts":1508329435,
        "date_password_set_ts_ms":1508329435000,
        "date_picture_check":null,
        "date_picture_check_ts":0,
        "date_picture_check_ts_ms":0,
        "browser":null,
        "organization_usergroups":[

        ],
        "organization":{
          "id":16,
          "name":"Rath-Jakubowski",
          "summary":"Queen merely remarking as it lasted.) 'Then the eleventh day must have a prize herself, you know,' said Alice, rather doubtfully, as she ran; but the Hatter went on, taking first one side and up I goes like a candle. I wonder what CAN have happened to me! I'LL soon make you dry enough!' They all.",
          "importance":1,
          "date_created":"2017-10-20 00:23:53",
          "date_created_ts":1508459033,
          "date_created_ts_ms":1508459033000,
          "picture_url":"https://example.net/file.php/o-avatar/default?s=80&size-fit=1"
        },
        "display_name":"Efren Frami",
        "primary_email":{
          "id":47,
          "email":"stan90@example.com"
        },
        "primary_phone":[

        ],
        "phone_numbers":[

        ],
        "emails":[
          {
            "id":47,
            "email":"stan90@example.com"
          }
        ],
        "usergroup_ids":[
          2
        ],
        "agentgroup_ids":[

        ],
        "picture_url_80":"https://example.net/file.php/size/80/size-fit/20KMTDJRGKSXKKWSS0/goldfish_kiss.jpg",
        "default_picture_url_80":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1",
        "picture_url_64":"https://example.net/file.php/size/64/size-fit/20KMTDJRGKSXKKWSS0/goldfish_kiss.jpg",
        "default_picture_url_64":"https://example.net/file.php/avatar/64/default.jpg?size-fit=1",
        "picture_url_50":"https://example.net/file.php/size/50/size-fit/20KMTDJRGKSXKKWSS0/goldfish_kiss.jpg",
        "default_picture_url_50":"https://example.net/file.php/avatar/50/default.jpg?size-fit=1",
        "picture_url_45":"https://example.net/file.php/size/45/size-fit/20KMTDJRGKSXKKWSS0/goldfish_kiss.jpg",
        "default_picture_url_45":"https://example.net/file.php/avatar/45/default.jpg?size-fit=1",
        "picture_url_32":"https://example.net/file.php/size/32/size-fit/20KMTDJRGKSXKKWSS0/goldfish_kiss.jpg",
        "default_picture_url_32":"https://example.net/file.php/avatar/32/default.jpg?size-fit=1",
        "picture_url_22":"https://example.net/file.php/size/22/size-fit/20KMTDJRGKSXKKWSS0/goldfish_kiss.jpg",
        "default_picture_url_22":"https://example.net/file.php/avatar/22/default.jpg?size-fit=1",
        "picture_url_16":"https://example.net/file.php/size/16/size-fit/20KMTDJRGKSXKKWSS0/goldfish_kiss.jpg",
        "default_picture_url_16":"https://example.net/file.php/avatar/16/default.jpg?size-fit=1",
        "picture_url":"https://example.net/file.php/size/80/size-fit/20KMTDJRGKSXKKWSS0/goldfish_kiss.jpg",
        "default_picture_url":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1"
      }
    },
    {
      "id":677,
      "default_on":false,
      "person":{
        "id":9,
        "gravatar_url":"https://secure.gravatar.com/avatar/26149481c774154b30fae977a656c860?&d=mm",
        "disable_picture":false,
        "is_contact":false,
        "is_user":true,
        "is_agent":true,
        "was_agent":false,
        "can_agent":true,
        "can_admin":false,
        "can_billing":false,
        "can_reports":false,
        "is_vacation_mode":false,
        "disable_autoresponses":false,
        "disable_autoresponses_log":null,
        "is_confirmed":true,
        "is_deleted":false,
        "is_disabled":false,
        "importance":0,
        "creation_system":"api.dev.1510145292",
        "name":"Abner Mraz",
        "first_name":"Abner",
        "last_name":"Mraz",
        "title_prefix":"",
        "override_display_name":"",
        "summary":"",
        "organization_position":"",
        "organization_manager":false,
        "timezone":"Europe/Vilnius",
        "date_created":"2016-12-11 00:24:19",
        "date_created_ts":1481415859,
        "date_created_ts_ms":1481415859000,
        "date_last_login":null,
        "date_last_login_ts":0,
        "date_last_login_ts_ms":0,
        "date_password_set":"2017-10-20 11:56:04",
        "date_password_set_ts":1508500564,
        "date_password_set_ts_ms":1508500564000,
        "date_picture_check":null,
        "date_picture_check_ts":0,
        "date_picture_check_ts_ms":0,
        "browser":null,
        "organization_usergroups":[
          {
            "id":5,
            "title":"VIP",
            "note":"VIP: Nihil sit temporibus quia odit.",
            "is_agent_group":false,
            "sys_name":null,
            "is_enabled":true
          },
          {
            "id":6,
            "title":"Extra Priv",
            "note":"Extra Priv: Occaecati suscipit sed consequuntur.",
            "is_agent_group":false,
            "sys_name":null,
            "is_enabled":true
          },
          {
            "id":7,
            "title":"Beta Users",
            "note":"Beta Users: Voluptates numquam officiis eveniet qui mollitia similique.",
            "is_agent_group":false,
            "sys_name":null,
            "is_enabled":true
          }
        ],
        "organization":{
          "id":19,
          "name":"Runolfsson, D'Amore and Stehr",
          "summary":"The soldiers were always getting up and went down to the Duchess: 'what a clear way you go,' said the Hatter grumbled: 'you shouldn't have put it into his plate. Alice did not much larger than a real nose; also its eyes were looking.",
          "importance":1,
          "date_created":"2016-12-02 16:41:11",
          "date_created_ts":1480696871,
          "date_created_ts_ms":1480696871000,
          "picture_url":"https://example.net/file.php/o-avatar/default?s=80&size-fit=1"
        },
        "display_name":"Abner Mraz",
        "primary_email":{
          "id":9,
          "email":"kunde.lester@example.com"
        },
        "primary_phone":[

        ],
        "phone_numbers":[

        ],
        "emails":[
          {
            "id":9,
            "email":"kunde.lester@example.com"
          }
        ],
        "usergroup_ids":[
          2
        ],
        "agentgroup_ids":[

        ],
        "picture_url_80":"https://example.net/file.php/size/80/size-fit/10KNXSRKPQRHHXPWG0/stanley_kubrick.jpg",
        "default_picture_url_80":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1",
        "picture_url_64":"https://example.net/file.php/size/64/size-fit/10KNXSRKPQRHHXPWG0/stanley_kubrick.jpg",
        "default_picture_url_64":"https://example.net/file.php/avatar/64/default.jpg?size-fit=1",
        "picture_url_50":"https://example.net/file.php/size/50/size-fit/10KNXSRKPQRHHXPWG0/stanley_kubrick.jpg",
        "default_picture_url_50":"https://example.net/file.php/avatar/50/default.jpg?size-fit=1",
        "picture_url_45":"https://example.net/file.php/size/45/size-fit/10KNXSRKPQRHHXPWG0/stanley_kubrick.jpg",
        "default_picture_url_45":"https://example.net/file.php/avatar/45/default.jpg?size-fit=1",
        "picture_url_32":"https://example.net/file.php/size/32/size-fit/10KNXSRKPQRHHXPWG0/stanley_kubrick.jpg",
        "default_picture_url_32":"https://example.net/file.php/avatar/32/default.jpg?size-fit=1",
        "picture_url_22":"https://example.net/file.php/size/22/size-fit/10KNXSRKPQRHHXPWG0/stanley_kubrick.jpg",
        "default_picture_url_22":"https://example.net/file.php/avatar/22/default.jpg?size-fit=1",
        "picture_url_16":"https://example.net/file.php/size/16/size-fit/10KNXSRKPQRHHXPWG0/stanley_kubrick.jpg",
        "default_picture_url_16":"https://example.net/file.php/avatar/16/default.jpg?size-fit=1",
        "picture_url":"https://example.net/file.php/size/80/size-fit/10KNXSRKPQRHHXPWG0/stanley_kubrick.jpg",
        "default_picture_url":"https://example.net/file.php/avatar/80/default.jpg?size-fit=1"
      }
    }
  ],
  "charges":[

  ],
  "ticket_slas":[
    {
      "id":163,
      "sla_status":"warning",
      "warn_date":"2017-10-27 00:42:35",
      "warn_date_ts":1509064955,
      "warn_date_ts_ms":1509064955000,
      "fail_date":null,
      "fail_date_ts":0,
      "fail_date_ts_ms":0,
      "is_completed":true,
      "is_completed_set":false,
      "completed_time_taken":130119,
      "sla":{
        "id":1,
        "title":"First",
        "sla_type":"first_response",
        "active_time":"default",
        "work_start":null,
        "work_end":null,
        "work_days":[

        ],
        "work_timezone":null,
        "work_holidays":[

        ],
        "apply_type":"all",
        "apply_terms":{
          "version":1,
          "terms":[

          ]
        },
        "warn_time":1,
        "warn_time_unit":"days",
        "warn_actions":{
          "version":1,
          "actions":[

          ]
        },
        "fail_time":1,
        "fail_time_unit":"days",
        "fail_actions":{
          "version":1,
          "actions":[

          ]
        }
      }
    }
  ],
  "labels":[
    "mann stroman and kuvalis"
  ],
  "problems":[
    {
      "id":64,
      "title":"Rerum nisi fugiat sit ut."
    }
  ],
  "total_user_waiting_real":1095333,
  "total_user_waiting_work":251580,
  "current_user_waiting":1095333,
  "current_user_waiting_work":251580,
  "total_to_first_reply_work":-504225,
  "total_to_resolution":7685452,
  "total_to_resolution_work":1847283,
  "access_code":"GHJHH87PNW68YY42H",
  "access_code_email_body_token":"(#GHJHH87PNW68YY42H)",
  "access_code_email_header_token":"PTAC-GHJHH87PNW68YY42H",
  "field1":"I'd rather not say",
  "field5":"Alice. 'Why, you don't know of any that do,' Alice hastily.",
  "field6":"Off with his head!\"' 'How dreadfully savage!' exclaimed Alice. 'That's very curious!' she thought. 'I must go and get in at the stick, and held it out into the teapot. 'At any rate it would like the look of it at all; and I'm sure she's the best way to change the subject. 'Go on with the distant sobs of the house till she had somehow fallen into a line along the passage.",
  "field7":"Medium",
  "field11":"Wed, 8th Nov 2017",
  "field12":"Nuisance",
  "field19":"Fire them off to the moon",
  "field24":"Bratwurst",
  "field33":"Wed, 8th Nov 2017 7:48am"
}
```

## Template Usage

```twig
<div class="entry">
<h1>{{tab.agent.name}}</h1>
<p>{{tab.agent.primary_email.email}}</p>
</div>
```
