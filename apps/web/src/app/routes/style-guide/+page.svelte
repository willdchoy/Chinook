<script>
  let text = $state("For whom the bell tolls...")
</script>

<div class="style-guide">
  <p>
    <input bind:value={text} type="text" />
  </p>

  <div class="box">
    <p>Headings</p>
    <h1>Extra Long {text}</h1>
    <h1>{text}</h1>
    <h2>{text}</h2>
    <h3>{text}</h3>
    <h4>{text}</h4>
    <h5>{text}</h5>
    <h6>{text}</h6>
  </div>

  <div class="box">
    <p>Paragraphs</p>
    <p>
      Schlesinger died of complications from COVID-19 on April 1, 2020. The
      surviving members of Fountains of Wayne played an online benefit concert
      that month as a tribute to Schlesinger, and reunited again for shows in
      2025.
    </p>
  </div>

  <div class="box">
    <p>Links</p>
    <p>
      <a href="/">{text}</a>
    </p>
  </div>

  <div class="box">
    <p>Buttons</p>
    <p>
      <button>{text}</button>
    </p>
  </div>

  <div class="box">
    <p>Icons</p>
    <p>
      <i class="fa-regular fa-heart"></i>
      <i class="fa-solid fa-share"></i>
      <i class="fa-solid fa-up-long"></i>
    </p>
  </div>
</div>

<style>
  .style-guide {
    max-width: 650px;
    padding: var(--p-xl) var(--p-md);

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      border: 1px dotted var(--surface4);
    }

    .box {
      border-top: var(--border);
      margin-top: calc(var(--m-2xl) * 2);
      padding-top: var(--p-md);

      & > p:first-child {
        font-weight: bold;
      }
    }
  }
</style>
