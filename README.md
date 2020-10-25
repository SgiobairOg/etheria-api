# Etheria API

An API to relationships and affiliations in "She-Ra and the Princesses of Power"

## Endpoints

### Individuals

`/api/v0/individuals`:

Retrieve information about all individuals in the database. Sample response:

```json
{
    "content": {
        "individuals": [
            {
                "id": 1,
                "name": "Adora"
            },
            {
                "id": 2,
                "name": "Catra"
            },
            ...
        ]
    },
    "links": {
        "self": "localhost:3000/api/v0/individuals"
    }
}
```

`/api/v0/individuals/:id`:

Retrieve information about a specific individual in the database by passing their id. Returns an empty collection if id doesn't exist. Sample response:

```bash
/api/v0/individuals/1
```

```json
{
    "content": {
        "individuals": [
            {
                "id": 2,
                "name": "Catra"
            }
        ]
    },
    "links": {
        "self": "localhost:3000/api/v0/individuals/2",
        "relationships": "localhost:3000/api/v0/relationships/2"
    }
}
```

`/api/v0/individuals/named/:name`:

Retrieve information about a individuals in the database by passing a full or partial name. Name is case insensitive. Returns an empty collection if id doesn't exist. Sample response:

```bash
/api/v0/individuals/named/a
```

```json
{
    "content": {
        "individuals": [
            {
                "id": 1,
                "name": "Adora"
            },
            ...
        ]
    },
    "links": {
        "self": "localhost:3000/api/v0/individuals/named/a"
    }
}
```

### Relationships

`/api/v0/relationships`:

Retrieve information about all relationships in the database. Sample response:

```json
{
    "content": {
        "relationships": [
            {
                "id": 1,
                "individual": 1,
                "relates_to": 2,
                "type": "partner",
                "lore": null,
                "former": false
            },
            {
                "id": 2,
                "individual": 1,
                "relates_to": 2,
                "type": "enemy",
                "lore": "Adora and Catra became enemies when Adora left The Horde in Season 1. They Reconciled in the final season.",
                "former": true
            },
            {
                "id": 3,
                "individual": 1,
                "relates_to": 2,
                "type": "ally",
                "lore": null,
                "former": false
            },
            ...
        ]
    },
    "links": {
        "self": "localhost:3000/api/v0/relationships"
    }
}
```

`/api/v0/relationships/:id`:

Retrieve information about a relationships of a specific individual in the database by passing their id. Returns an empty collection if id doesn't exist. Sample response:

```bash
/api/v0/relationships/1
```

```json
{
    "content": {
        "relationships": [
            {
                "id": 1,
                "individual": 1,
                "relates_to": 2,
                "type": "partner",
                "lore": null,
                "former": false
            },
            {
                "id": 2,
                "individual": 1,
                "relates_to": 2,
                "type": "enemy",
                "lore": "Adora and Catra became enemies when Adora left The Horde in Season 1. They Reconciled in the final season.",
                "former": true
            },
            {
                "id": 3,
                "individual": 1,
                "relates_to": 2,
                "type": "ally",
                "lore": null,
                "former": false
            },
            ...
        ]
    },
    "links": {
        "self": "localhost:3000/api/v0/relationships"
    }
}
```

## Issues

Please report any issues using the github issues tool.

## Contributing

I will _definitely_ need help getting data on relationships sorted. But I don't have any formal setup for contributing right now. So if you'd like to help out, just send a message.
