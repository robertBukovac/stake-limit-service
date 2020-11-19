INSERT INTO sls_sls (
  "timeDuration",
  "stakeLimit",
  "hotPercentage",
  "restrictionExpires"
) VALUES 
  (2, 3, 4, 5), 
  (2, 3, 4, 5);

INSERT INTO sls_device (
  "slsId"
) VALUES 
  (1), 
  (2);

INSERT INTO sls_ticket (
  "stake",
  "timestamp"
) VALUES 
  (200, NOW());