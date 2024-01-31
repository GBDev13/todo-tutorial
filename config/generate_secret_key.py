import os
import secrets


def generate_and_save_secret_key():
    # Generate a new secret key
    new_secret_key = secrets.token_hex(24)

    # Check if the .env file exists
    if not os.path.exists(".env"):
        with open(".env", "w") as env_file:
            env_file.write(f"DJANGO_SECRET_KEY={new_secret_key}\n")
        print(".env file created.")

    # .env file exists, just update the DJANGO_SECRET_KEY
    else:
        with open(".env", "r") as env_file:
            lines = env_file.readlines()

        # Update or add the DJANGO_SECRET_KEY
        found = False
        for i in range(len(lines)):
            if lines[i].startswith("DJANGO_SECRET_KEY="):
                lines[i] = f"DJANGO_SECRET_KEY={new_secret_key}\n"
                found = True
                break

        # If DJANGO_SECRET_KEY is not found, add it to the end
        if not found:
            lines.append(f"DJANGO_SECRET_KEY={new_secret_key}\n")

        with open(".env", "w") as env_file:
            env_file.writelines(lines)
        print("Updated DJANGO_SECRET_KEY in .env file.")

    # Print a message or save to a file if needed
    print(f"Generated and saved new Django secret key: {new_secret_key}")


if __name__ == "__main__":
    generate_and_save_secret_key()
