export function initContactForms(site) {
  const forms = document.querySelectorAll('[data-contact-form]');

  forms.forEach((form) => {
    const status = form.querySelector('[data-form-status]');
    const fallback = form.querySelector('[data-form-fallback]');
    const button = form.querySelector('button[type="submit"]');
    const endpointConfigured = Boolean(site.contactEndpoint);

    if (!endpointConfigured && fallback) {
      fallback.hidden = false;
    }

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!form.reportValidity()) {
        return;
      }

      const honeypot = form.querySelector('[name="company"]');
      if (honeypot?.value) {
        setStatus(status, 'Submission blocked.', 'warn');
        return;
      }

      if (!endpointConfigured) {
        setStatus(
          status,
          `Online submission is not configured yet. Please call ${site.phoneDisplay} to request an inspection.`,
          'warn'
        );
        return;
      }

      const payload = Object.fromEntries(new FormData(form).entries());
      delete payload.company;
      payload.submittedAt = new Date().toISOString();

      if (button) {
        button.disabled = true;
        button.dataset.originalLabel = button.textContent;
        button.textContent = 'Sending request...';
      }

      try {
        const response = await fetch(site.contactEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        form.reset();
        setStatus(status, 'Request sent. Texas Superior Roofing will follow up shortly.', 'success');
      } catch (error) {
        console.error(error);
        setStatus(
          status,
          `We could not send the request right now. Please call ${site.phoneDisplay} to continue.`,
          'error'
        );
      } finally {
        if (button) {
          button.disabled = false;
          button.textContent = button.dataset.originalLabel || 'Send request';
        }
      }
    });
  });
}

function setStatus(node, message, tone) {
  if (!node) {
    return;
  }

  node.hidden = false;
  node.className = `form-status form-status--${tone}`;
  node.textContent = message;
}
