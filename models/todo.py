from odoo import models, fields, api


class Todo(models.Model):
    _name = 'todo.owl'
    _description = 'Todo owl'

    name = fields.Char(string = "Task Name: ")
    completed = fields.Boolean()
    color = fields.Char()
