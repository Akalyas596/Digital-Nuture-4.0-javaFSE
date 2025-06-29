-- Create the customers table
CREATE TABLE customers (
    customer_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    age NUMBER,
    balance NUMBER,
    loan_interest_rate NUMBER,
    IsVIP CHAR(1) DEFAULT 'N' -- 'Y' for VIP, 'N' for non-VIP
);

-- Create the loans table
CREATE TABLE loans (
    loan_id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    loan_amount NUMBER,
    loan_due_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Insert example customers
INSERT INTO customers (customer_id, name, age, balance, loan_interest_rate, IsVIP) VALUES (1, 'Alice', 65, 15000, 5.0, 'N');
INSERT INTO customers (customer_id, name, age, balance, loan_interest_rate, IsVIP) VALUES (2, 'Bob', 45, 8000, 4.5, 'N');
INSERT INTO customers (customer_id, name, age, balance, loan_interest_rate, IsVIP) VALUES (3, 'Charlie', 70, 12000, 6.0, 'N');

-- Insert example loans
INSERT INTO loans (loan_id, customer_id, loan_amount, loan_due_date) VALUES (1, 1, 5000, SYSDATE + 20);
INSERT INTO loans (loan_id, customer_id, loan_amount, loan_due_date) VALUES (2, 2, 3000, SYSDATE + 40);
INSERT INTO loans (loan_id, customer_id, loan_amount, loan_due_date) VALUES (3, 3, 7000, SYSDATE + 10);

--Scenario 1: Apply a Discount to Loan Interest Rates
DECLARE
    CURSOR customer_cursor IS
        SELECT customer_id, age, loan_interest_rate
        FROM customers;
    v_discount_rate NUMBER := 0.01; -- 1% discount
BEGIN
    FOR customer IN customer_cursor LOOP
        IF customer.age > 60 THEN
            UPDATE customers
            SET loan_interest_rate = loan_interest_rate - (loan_interest_rate * v_discount_rate)
            WHERE customer_id = customer.customer_id;
        END IF;
    END LOOP;
    COMMIT; -- Commit the changes
END;
/
--Scenario 2: Promote Customers to VIP Status
DECLARE
    CURSOR customer_cursor IS
        SELECT customer_id, balance
        FROM customers;
BEGIN
    FOR customer IN customer_cursor LOOP
        IF customer.balance > 10000 THEN
            UPDATE customers
            SET IsVIP = 'Y'
            WHERE customer_id = customer.customer_id;
        END IF;
    END LOOP;
    COMMIT; -- Commit the changes
END;
/

-- 3: Send Reminders for Loans Due in 30 Days
DECLARE
    CURSOR loan_cursor IS
        SELECT customer_id, loan_due_date
        FROM loans
        WHERE loan_due_date BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR loan IN loan_cursor LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan for customer ' || loan.customer_id || ' is due on ' || loan.loan_due_date);
    END LOOP;
END;
/
