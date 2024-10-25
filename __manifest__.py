# -*- coding: utf-8 -*-
{
    'name' : 'Owl Tutorial',
    'version' : '1.0',
    'summary': 'OWL Tutorial',
    'sequence': -1,
    'description': """OWL Tutorial Custom Dashboard""",
    'category': 'OWL',
    'depends' : ['base', 'web', 'sale', 'board'],
    'data': [
        'views/sales_dashboard.xml',
    ],
    'demo': [
    ],
    'installable': True,
    'application': True,
    # 'assets': {
    #     'web.assets_backend': [
    #         'owl_dashboard/static/src/components/kpi_card/kpi_card.js',
    #         'owl_dashboard/static/src/components/kpi_card/kpi_card.xml',
    #         'owl_dashboard/static/src/components/sales_dashboard.js',
    #         'owl_dashboard/static/src/components/sales_dashboard.xml',
    #     ],
    # },
    'assets': {
        'web.assets_backend': [
            'owl_dashboard/static/src/components/**/*.js',
            'owl_dashboard/static/src/components/**/*.xml',
        ],
    },
}
