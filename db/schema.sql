CREATE TYPE relation_type AS ENUM (
  'partner', 'sibling', 'child', 'parent', 'friend', 'enemy', 'ally'
);

CREATE TABLE individual (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL
);

CREATE TABLE relationship (
  id    SERIAL PRIMARY KEY,
  individual  INTEGER NOT NULL REFERENCES individual (id),
  relates_to  INTEGER NOT NULL REFERENCES individual (id),
  type  relation_type NOT NULL,
  lore TEXT,
  former BOOLEAN DEFAULT FALSE
);

CREATE INDEX ON relationship (type);

INSERT INTO individual VALUES
  (1, 'Adora'), (2, 'Catra');

INSERT INTO relationship VALUES
  (1, 1, 2, 'partner', null, FALSE), (2, 1, 2, 'enemy', 'Adora and Catra became enemies when Adora left The Horde in Season 1. They Reconciled in the final season.', TRUE), (3, 1, 2, 'ally', null, FALSE);
