

-- Stored Procedure: Process Monthly Interest
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01),
        LastModified = SYSDATE
    WHERE AccountType = 'Savings';
    
    COMMIT;
END ProcessMonthlyInterest;
/

-- Stored Procedure: Update Employee Bonus
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_Department IN VARCHAR2,
    p_BonusPercentage IN NUMBER
) AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * (p_BonusPercentage / 100)),
        HireDate = SYSDATE
    WHERE Department = p_Department;
    
    COMMIT;
END UpdateEmployeeBonus;
/

-- Stored Procedure: Transfer Funds
CREATE OR REPLACE PROCEDURE TransferFunds(
    p_FromAccountID IN NUMBER,
    p_ToAccountID IN NUMBER,
    p_Amount IN NUMBER
) AS
    v_Balance NUMBER;
BEGIN
    -- Check the balance of the source account
    SELECT Balance INTO v_Balance
    FROM Accounts
    WHERE AccountID = p_FromAccountID;

    IF v_Balance < p_Amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in the source account.');
    ELSE
        -- Deduct from the source account
        UPDATE Accounts
        SET Balance = Balance - p_Amount,
            LastModified = SYSDATE
        WHERE AccountID = p_FromAccountID;

        -- Add to the destination account
        UPDATE Accounts
        SET Balance = Balance + p_Amount,
            LastModified = SYSDATE
        WHERE AccountID = p_ToAccountID;

        COMMIT;
    END IF;
END TransferFunds;
/


EXEC ProcessMonthlyInterest;
SELECT * FROM Accounts;
EXEC UpdateEmployeeBonus('HR', 10);
SELECT * FROM Employees;
EXEC TransferFunds(1, 2, 100);
SELECT * FROM Accounts;
