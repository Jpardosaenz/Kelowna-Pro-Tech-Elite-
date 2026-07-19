# AGENTS.md

## Project purpose
Kelowna Protech Elite Mobile Mechanic website.

Purpose:
- Present a certified mobile mechanic service in Kelowna/Okanagan.
- Emphasize on-site diagnostics, maintenance, and pre-purchase inspections.
- Support a direct, professional customer journey from landing page to contact.

## Non-negotiable workflow rules
- Do not modify `main` directly. All work must happen in a test branch. `main` may only be modified if the project owner gives direct, explicit approval.
- One task must use exactly one dedicated branch and one dedicated worktree. Never reuse a branch or worktree for a different task, even when the tasks are related.
- A follow-up may remain on the same branch only when it directly completes the same approved deliverable. A new objective, deliverable, bug, content change, or operational request is a new task and requires a new branch and worktree.
- Before any edit, confirm that the current branch name and worktree belong to the active task. If unrelated commits or uncommitted changes are present, stop; do not move, stash, overwrite, or commit them. Create a clean branch and worktree for the new task.
- Concurrent people or agents must never write from the same branch or worktree. Each active task must have its own isolated branch and worktree.
- Do not make bulk corrections or bulk commits. Audit the relevant context first, work in the smallest possible increments, fix step by step, and verify after each micro-change before continuing.
- Changes must be approved before execution.
- State the reason for the change and its intended outcome before substantial work.
- Use `docs/` as secondary supporting reference only, not as the primary source of rules.

## Minimum architecture context
- Static multi-page website built with HTML, CSS, and vanilla JavaScript.
- Main shared JavaScript file: `scripts.js`.
- Key styling files include `estilos-header2.css` and `service-tiles.css`.
- Main site structure includes `index.html`, `services/`, `images/`, `_redirects`, `_headers`, `robots.txt`, and `sitemap.xml`.

## Quality standards
- Preserve semantic HTML and accessibility basics such as meaningful structure, labels, and descriptive alt text.
- Keep the frontend responsive and mobile-first.
- Avoid unnecessary heavy dependencies.
- Maintain consistency between visible content and structured SEO content where applicable.
- Prefer simple solutions over unnecessary complexity.
- Avoid unnecessary repetition in code, structure, and content.
- Prefer refining existing code over rewriting without a clear reason.
- Reuse existing structure and patterns before creating parallel solutions.

## Content/compliance rules
- Do not publish prices.
- Keep copy professional, direct, clear, and current.
- Highlight clarity of diagnosis and mobile/on-site service value without unsupported claims.
- Preserve clean internal linking and page-to-page consistency.

## Safe working process
- Locate the smallest viable change before editing.
- Edit only the files required for the task.
- Test locally before considering the work complete.
- Review the diff before any commit or handoff.

## Long-form reference documents
Use these as supporting references:
- `docs/agents.md`
- `docs/JSONLD_Workflow.md`
- Other project documents under `docs/` as needed
