import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { Error, Success } from "~/components/alerts";
import sendMail from "~/mailer/mailer";
import styles from "~/styles/idea.css";
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }
  const form = await request.formData();
  const name = form.get("name");
  const email = form.get("email");
  const message = form.get("message");
  if (!name || !email || !message) {
    return json(
      {
        error: "Missing required parameters",
        name: !name,
        message: !message,
        email: !email,
      },
      400
    );
  }
  try {
    await sendMail({ name, email, message });
    return json({ message: "Done" }, 200);
  } catch (error) {
    return json({ error: JSON.stringify(error) }, 500);
  }
};

export default function Index() {
  const actionData = useActionData();

  return (
    <div className="ideas-container">
      <form method="post">
        {actionData?.error && <Error message={actionData.error} />}
        {actionData?.message && <Success message={actionData.message} />}
        <label className={actionData?.email && "invalid"}>
          אימייל: <input type="email" name="email" required />
        </label>
        <label className={actionData?.name && "invalid"}>
          שם: <input type="name" name="name" required />
        </label>
        <label className={actionData?.message && "invalid"}>
          רעיון: <textarea name="message" required />
        </label>
        <button type="submit" className="button">
          שלח
        </button>
      </form>
    </div>
  );
}
