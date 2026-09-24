/**
 * Workout Routine Data Structure
 * Contains Warm-up, Main Workout, and Stretching for Days 1 (Mon) through 5 (Fri).
 */
const routineData = {
  1: {
    name: "Monday",
    focus: "Chest & Triceps",
    warmUp: [
      {
        id: "m_wu_1",
        name: "Arm Circles & Band Dislocates",
        images: ["https://picsum.photos/400/300?chest1", "https://picsum.photos/400/300?chest2"],
        sets: "2 sets",
        reps: "15 reps",
        time: "5 min"
      }
    ],
    mainWorkout: [
      {
        id: "m_main_1",
        name: "Flat Barbell Bench Press",
        images: ["https://picsum.photos/400/300?bench1", "https://picsum.photos/400/300?bench2"],
        sets: "4 sets",
        reps: "8-10 reps",
        time: "15 min"
      },
      {
        id: "m_main_2",
        name: "Tricep Cable Pushdowns",
        images: ["https://picsum.photos/400/300?tricep1", "https://picsum.photos/400/300?tricep2"],
        sets: "3 sets",
        reps: "12 reps",
        time: "8 min"
      }
    ],
    stretch: [
      {
        id: "m_str_1",
        name: "Doorway Pectoral Stretch",
        images: ["https://picsum.photos/400/300?pec1", "https://picsum.photos/400/300?pec2"],
        sets: "2 sets",
        reps: "30s hold",
        time: "4 min"
      }
    ]
  },
  2: {
    name: "Tuesday",
    focus: "Back & Biceps",
    warmUp: [
      {
        id: "tu_wu_1",
        name: "Cat-Cow & Scapular Shrugs",
        images: ["https://picsum.photos/400/300?back1", "https://picsum.photos/400/300?back2"],
        sets: "2 sets",
        reps: "12 reps",
        time: "5 min"
      }
    ],
    mainWorkout: [
      {
        id: "tu_main_1",
        name: "Lat Pulldowns",
        images: ["https://picsum.photos/400/300?lat1", "https://picsum.photos/400/300?lat2"],
        sets: "4 sets",
        reps: "10-12 reps",
        time: "12 min"
      },
      {
        id: "tu_main_2",
        name: "Standing Dumbbell Bicep Curls",
        images: ["https://picsum.photos/400/300?curl1", "https://picsum.photos/400/300?curl2"],
        sets: "3 sets",
        reps: "12 reps",
        time: "8 min"
      }
    ],
    stretch: [
      {
        id: "tu_str_1",
        name: "Child's Pose Lat Stretch",
        images: ["https://picsum.photos/400/300?child1", "https://picsum.photos/400/300?child2"],
        sets: "2 sets",
        reps: "45s hold",
        time: "4 min"
      }
    ]
  },
  3: {
    name: "Wednesday",
    focus: "Legs & Abs",
    warmUp: [
      {
        id: "w_wu_1",
        name: "Bodyweight Air Squats & Leg Swings",
        images: ["https://picsum.photos/400/300?leg1", "https://picsum.photos/400/300?leg2"],
        sets: "2 sets",
        reps: "15 reps",
        time: "6 min"
      }
    ],
    mainWorkout: [
      {
        id: "w_main_1",
        name: "Goblet Squats",
        images: ["https://picsum.photos/400/300?squat1", "https://picsum.photos/400/300?squat2"],
        sets: "4 sets",
        reps: "10-12 reps",
        time: "15 min"
      },
      {
        id: "w_main_2",
        name: "Hanging Knee Raises",
        images: ["https://picsum.photos/400/300?abs1", "https://picsum.photos/400/300?abs2"],
        sets: "3 sets",
        reps: "15 reps",
        time: "8 min"
      }
    ],
    stretch: [
      {
        id: "w_str_1",
        name: "Standing Quad & Hamstring Stretch",
        images: ["https://picsum.photos/400/300?ham1", "https://picsum.photos/400/300?ham2"],
        sets: "2 sets",
        reps: "30s each",
        time: "5 min"
      }
    ]
  },
  4: {
    name: "Thursday",
    focus: "Shoulders & Core",
    warmUp: [
      {
        id: "th_wu_1",
        name: "Shoulder Rotations & Light Wall Slides",
        images: ["https://picsum.photos/400/300?sh1", "https://picsum.photos/400/300?sh2"],
        sets: "2 sets",
        reps: "12 reps",
        time: "5 min"
      }
    ],
    mainWorkout: [
      {
        id: "th_main_1",
        name: "Dumbbell Overhead Shoulder Press",
        images: ["https://picsum.photos/400/300?press1", "https://picsum.photos/400/300?press2"],
        sets: "4 sets",
        reps: "8-10 reps",
        time: "12 min"
      },
      {
        id: "th_main_2",
        name: "Dumbbell Lateral Raises",
        images: ["https://picsum.photos/400/300?latraise1", "https://picsum.photos/400/300?latraise2"],
        sets: "4 sets",
        reps: "12-15 reps",
        time: "10 min"
      }
    ],
    stretch: [
      {
        id: "th_str_1",
        name: "Cross-Body Shoulder Stretch",
        images: ["https://picsum.photos/400/300?cross1", "https://picsum.photos/400/300?cross2"],
        sets: "2 sets",
        reps: "30s each",
        time: "4 min"
      }
    ]
  },
  5: {
    name: "Friday",
    focus: "Full Body & Conditioning",
    warmUp: [
      {
        id: "f_wu_1",
        name: "Jumping Jacks & Dynamic Hip Stretch",
        images: ["https://picsum.photos/400/300?jack1", "https://picsum.photos/400/300?jack2"],
        sets: "2 sets",
        reps: "20 reps",
        time: "5 min"
      }
    ],
    mainWorkout: [
      {
        id: "f_main_1",
        name: "Kettlebell Swings",
        images: ["https://picsum.photos/400/300?swing1", "https://picsum.photos/400/300?swing2"],
        sets: "4 sets",
        reps: "15 reps",
        time: "10 min"
      },
      {
        id: "f_main_2",
        name: "Push-Up to Renegade Row",
        images: ["https://picsum.photos/400/300?row1", "https://picsum.photos/400/300?row2"],
        sets: "3 sets",
        reps: "10 reps",
        time: "10 min"
      }
    ],
    stretch: [
      {
        id: "f_str_1",
        name: "Full Body Cobra & Downward Dog",
        images: ["https://picsum.photos/400/300?cobra1", "https://picsum.photos/400/300?cobra2"],
        sets: "3 sets",
        reps: "30s hold",
        time: "5 min"
      }
    ]
  }
};

// --- LocalStorage Helpers ---
function getStoredCompletion(id) {
  return localStorage.getItem(`gym_done_${id}`) === "true";
}

function setStoredCompletion(id, isDone) {
  localStorage.setItem(`gym_done_${id}`, isDone);
}

// --- Card HTML Generation ---
function buildCardsHTML(exercises) {
  if (!exercises || exercises.length === 0) {
    return `<p style="font-size:0.85rem; color:#94a3b8;">No exercises scheduled.</p>`;
  }

  return exercises.map(item => {
    const isCompleted = getStoredCompletion(item.id);
    return `
      <article class="exercise-card ${isCompleted ? 'completed' : ''}" id="card-${item.id}">
        <div class="card-header">
          <h3>${item.name}</h3>
          <label class="complete-toggle">
            <span>Done</span>
            <input 
              type="checkbox" 
              ${isCompleted ? 'checked' : ''} 
              onchange="handleToggleDone('${item.id}')"
            />
          </label>
        </div>

        <div class="image-row">
          <div class="thumbnail-wrapper" onclick="openModal('${item.images[0]}', '${item.name} - Step 1')">
            <img src="${item.images[0]}" alt="${item.name} - 1" loading="lazy" />
            <span class="image-label">Start</span>
          </div>
          <div class="thumbnail-wrapper" onclick="openModal('${item.images[1]}', '${item.name} - Step 2')">
            <img src="${item.images[1]}" alt="${item.name} - 2" loading="lazy" />
            <span class="image-label">Finish</span>
          </div>
        </div>

        <div class="meta-info">
          <span class="badge">${item.sets} • ${item.reps}</span>
          <span>⏱ ${item.time}</span>
        </div>
      </article>
    `;
  }).join("");
}

// --- Render Selected Day ---
let currentSelectedDay = 1;

function renderDay(dayNumber) {
  currentSelectedDay = dayNumber;
  const container = document.getElementById("workout-container");
  const routine = routineData[dayNumber];
  const titleElem = document.getElementById("active-day-title");

  if (!routine) return;

  titleElem.textContent = `${routine.name}: ${routine.focus}`;

  container.innerHTML = `
    <section class="category-group">
      <h2 class="category-title">1. Warm Up</h2>
      ${buildCardsHTML(routine.warmUp)}
    </section>

    <section class="category-group">
      <h2 class="category-title">2. Main Workout</h2>
      ${buildCardsHTML(routine.mainWorkout)}
    </section>

    <section class="category-group">
      <h2 class="category-title">3. Stretch & Cool Down</h2>
      ${buildCardsHTML(routine.stretch)}
    </section>
  `;
}

// --- Toggle Exercise Completion ---
function handleToggleDone(id) {
  const card = document.getElementById(`card-${id}`);
  if (!card) return;

  const checkbox = card.querySelector('input[type="checkbox"]');
  const checked = checkbox.checked;

  card.classList.toggle("completed", checked);
  setStoredCompletion(id, checked);
}

// --- Fullscreen Image Modal ---
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");
const modalClose = document.getElementById("modal-close");

function openModal(src, caption) {
  modalImg.src = src;
  modalCaption.textContent = caption;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// --- Tab Switching Navigation ---
const tabButtons = document.querySelectorAll(".tab-btn");

function switchTab(dayNumber) {
  tabButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.day === String(dayNumber));
  });
  renderDay(dayNumber);
}

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => switchTab(Number(btn.dataset.day)));
});

// --- Reset Button (Clear Checkboxes for Current Day) ---
document.getElementById("reset-btn").addEventListener("click", () => {
  const routine = routineData[currentSelectedDay];
  if (!routine) return;

  const allExercises = [...routine.warmUp, ...routine.mainWorkout, ...routine.stretch];
  allExercises.forEach(item => {
    localStorage.removeItem(`gym_done_${item.id}`);
  });

  renderDay(currentSelectedDay);
});

// --- Initial Launch Setup ---
window.addEventListener("DOMContentLoaded", () => {
  const dayOfWeek = new Date().getDay(); // 0 = Sun, 1 = Mon ... 5 = Fri, 6 = Sat
  const initialDay = (dayOfWeek >= 1 && dayOfWeek <= 5) ? dayOfWeek : 1;
  switchTab(initialDay);
});