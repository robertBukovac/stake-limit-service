CREATE TABLE IF NOT EXISTS sls_sls (
  "id" INT GENERATED ALWAYS AS IDENTITY,
  "timeDuration" INT NOT NULL DEFAULT 10,
  "stakeLimit" INT NOT NULL DEFAULT 1000,
  "hotPercentage" INT NOT NULL DEFAULT 80,
  "restrictionExpires" INT NOT NULL DEFAULT 5,
  PRIMARY KEY("id")
);

CREATE TABLE IF NOT EXISTS sls_device (
  "id" INT GENERATED ALWAYS AS IDENTITY,
  "slsId" INT,
  PRIMARY KEY("id"),
  CONSTRAINT fk_sls_sls
    FOREIGN KEY("slsId")
      REFERENCES sls_sls("id")
      ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS sls_ticket (
  "id" INT GENERATED ALWAYS AS IDENTITY,
  "stake" INT NOT NULL,
  "timestamp" TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY("id")
);