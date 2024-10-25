# -*- coding: utf-8 -*-
{
    'name': "Owl Tutorial",
    'version': '18.0',
    'category': 'hidden',
    'sequence': -1,
    'summary': """
        this module is use for website practice purposes only""",
    'description': """
        this module is use for website practice purposes only for version 18
    """,
    'depends': ['base','web', 'sale_management'],
    'data': [
        'security/ir.model.access.csv',
        'views/sale_order.xml',
    ],
    'assets':{
        'web.assets_backend': [
            'todo_owl/static/src/component/sale_order_form_view.js'
        ]
    },
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
}