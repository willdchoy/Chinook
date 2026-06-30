<script>
  import Avatar from "../avatar/Avatar.svelte"
</script>

<div class="about">
  <div class="members">
    <span>
      <Avatar />
      Will Choy
    </span>
    <span>
      <Avatar />
      Will Choy
    </span>
    <span>
      <Avatar />
      Will Choy
    </span>
    <span>
      <Avatar />
      Will Choy
    </span>
    <span>
      <Avatar />
      Will Choy
    </span>
  </div>

  <p>
    Fountains of Wayne is an American rock band that formed in New York City in
    1995. The band's lineup for the majority of its career was founding members
    Chris Collingwood and Adam Schlesinger, with Jody Porter and Brian Young who
    joined after the band's first album. The band, best known for the
    Grammy-nominated song "Stacy's Mom," released six albums from 1996 to 2011
    before effectively disbanding in 2013.
  </p>
  <p>
    Schlesinger died of complications from COVID-19 on April 1, 2020. The
    surviving members of Fountains of Wayne played an online benefit concert
    that month as a tribute to Schlesinger, and reunited again for shows in
    2025.
  </p>
</div>

<style>
  .about {
    max-width: 500px;

    .members {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--m-2xl);

      span {
        cursor: pointer;
        text-align: center;
        font-size: var(--fs-sm);
      }
    }
  }
</style>
